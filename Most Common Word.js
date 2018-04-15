/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var temp = paragraph.toLowerCase().split(" ");
    var map = {};
    var max = 0;
    var res = "";
    for (let i=0; i<temp.length; i++) {
        var t = temp[i];
        if (temp[i][temp[i].length-1]!=="," && temp[i][temp[i].length-1]!=="." && temp[i][temp[i].length-1]!=="!" && temp[i][temp[i].length-1]!=="?" && temp[i][temp[i].length-1]!==";" && temp[i][temp[i].length-1]!=="'") {
        //if (temp[i][temp[i].length-1]!==/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|||\-|\_|\+|\=|\||\\||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g) {
            if (banned.indexOf(temp[i])!==-1) continue;
            if (map[temp[i]]!==undefined) map[temp[i]]++;
            else map[temp[i]]=1;
            
        } else {
            t = temp[i].slice(0,temp[i].length-1);
            if (banned.indexOf(t)!==-1) continue;
            if (map[t]!==undefined) map[t]++;
            else map[t]=1;
        }
        if (map[t]>max) {
            max = map[t];
            res = t;
        }
    }
    return res;
    
};
