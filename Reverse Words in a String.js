/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    
    str = str.trim();
    var temp = str.split(" ");
    var temp2 = [];
    for (i=0; i<temp.length; i++) {
        if (temp[i]==="") {temp.splice(i,1); i--}
    }
    var res = temp.reverse().join(" ");
    
    if (res[0]===" ") return res.slice(1);
    else return res;
};
