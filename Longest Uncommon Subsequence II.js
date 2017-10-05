/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    
    strs.sort(sortLength);
    var map = {};
    for (i=0; i<strs.length; i++) {
        if (map[strs[i]] === undefined) map[strs[i]] = 0;
        else map[strs[i]]++;
    }
    
    var flag = true;
    for (i=0; i<strs.length; i++) {
        flag = true;
        if (map[strs[i]] === 0) {
            for (j=0; j<i; j++) {
                if (issubsequence(strs[j], strs[i])) {
                    flag = false;
                    break;
                }
            }
        } else flag = false;
        if (flag === true) return strs[i].length;
    }
    
    return -1;
    
    
    function sortLength(a, b) {
        return b.length - a.length;
    }
    
    function issubsequence(temp1, temp2) {
        var p = 0, q = 0;
        while (p < temp1.length && q < temp2.length) {
            if (temp1[p] === temp2[q]) q++;
            p++;
        }
        return q === temp2.length;
    }
};
