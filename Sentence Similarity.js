/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
    var n = words1.length;
    var m = words2.length;
    if (n!==m) return false;
    for (let i=0; i<pairs.length; i++) pairs[i]=pairs[i].join("");
    for (let i=0; i<n; i++) {
        var temp1 = [words1[i], words2[i]].join("");
        var temp2 = [words2[i], words1[i]].join("");
        if (words1[i]!==words2[i] && pairs.indexOf(temp1)===-1 && pairs.indexOf(temp2)===-1) return false;
    }
    
    return true;
};
