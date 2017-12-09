/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    function sortLength(a, b) {return b.length-a.length;}
    words.sort(sortLength);
    var len = 0;
    var temp = [];
    for (var i=0; i<words.length; i++) {
        for (var j=1; j<words[i].length; j++) {
            if (words.indexOf(words[i].slice(0,j))===-1) break;
        }
        if (j===words[i].length) {
            if (len>words[i].length) break;
            else {
                len = words[i].length;
                temp.push(words[i]);
            }
        } 
    }
    temp.sort();
    return temp[0];
};
