/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    if (words1.length!==words2.length) return false;
    let map = {};
    for (var i=0; i<pairs.length; i++) {
        var w1 = pairs[i][0], w2 = pairs[i][1];
        if (map[w1]===undefined) map[w1]=[w1];
        if (map[w2]===undefined) map[w2]=[w2];
        if (map[w1].indexOf(w2)===-1) {
            for (var p in map[w2]) {
                if (map[w1].indexOf(map[w2][p])===-1) map[w1]=map[w1].concat(map[w2][p]);
            }
        }
        if (map[w2].indexOf(w1)===-1) {
            for (var p in map[w1]) {
                if (map[w2].indexOf(map[w1][p])===-1) map[w2]=map[w2].concat(map[w1][p]);
            }
        }
    }
    let flag = false;
    let temp = [];
    for (i=0; i<words1.length; i++) {
        temp = [];
        flag = false;
        if (words1[i]!==words2[i] && (map[words1[i]]===undefined || map[words2[i]]===undefined)) return false;
        if (words1[i]!==words2[i]) {
            helper(words1[i], words2[i]);
            if (!flag) return false;
        }
    }
    
    function helper(ww1, ww2) {
        if (flag) return true;
        if (map[ww1].indexOf(ww2)!==-1) return flag = true;
        else {
            for (var j=0; j<map[ww1].length; j++) {
                if (temp.indexOf(map[ww1][j])===-1) {
                    temp.push(map[ww1][j]);
                    helper(map[ww1][j], ww2);
                }
            }
        }
    }
    return true;
};

///////////////////////////////////////////////////////////////////
//// this can be more consice//////////////////////////////////////

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    if (words1.length !== words2.length){
        return false;
    }
    
    const id = {};
    
    const getParent = (word) => {
        if (!id[word]){
            return word;
        }
        
        while (word !== id[word]){
            word = id[word];
        }
        
        return word;
    }
    
    const unite = (w1, w2) => {
        const p1 = getParent(w1);
        const p2 = getParent(w2);
        
        id[p1] = p2;
    };
    
    for (let pair of pairs){
        const w1 = pair[0];
        const w2 = pair[1];
        
        if (!id[w1]){
            id[w1] = w1;
        }
        
        if (!id[w2]){
            id[w2] = w2;
        }
        
        unite(w1, w2);
    }
    
    for (let i = 0; i < words1.length; i++){
        const w1 = words1[i];
        const w2 = words2[i];
        
        if (getParent(w1) !== getParent(w2)){
            return false;
        }
    }
    
    return true;
};
