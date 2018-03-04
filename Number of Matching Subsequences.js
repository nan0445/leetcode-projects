/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    var count = 0;
    let map = {};
    
    for (let i=0; i<words.length; i++) {
        if (map[words[i]]===undefined) {
            map[words[i]] = false;
            if (helper(words[i],S)) count++;
        }
        else {
            if (map[words[i]]) {
                count++;
                continue;
            } else continue;
        }
        
    }
    return count;
    
    function helper(word, S) {
        var j=0, k=0;
        while (j<word.length && k<S.length) {
            if (word[j]===S[k]) {
                j++;
                k++;
            } else k++;
            if (j===word.length) {
                map[word] = true;
                return true;
            }
                
        }
        return false;
    }
};
