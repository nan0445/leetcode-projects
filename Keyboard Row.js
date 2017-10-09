/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var result = [];
    var lib = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    for (i=0; i<words.length; i++) {
        var tt = words[i].toLowerCase();
        var temp = [];
        for (k=0; k<tt.length; k++) {
            for (j=0; j<3; j++) {
                if (lib[j].indexOf(tt[k]) !== -1) {
                    temp.push(j);
                    break;
                }
            }
            if (k>0 && temp[k] !== temp[k-1]) break;
        }
        if (k===words[i].length) result.push(words[i]);
        
    }
    return result;
};
