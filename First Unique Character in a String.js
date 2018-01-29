/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]===1) continue;
        else map[s[i]] = 1;
        if (s.slice(i+1).indexOf(s[i])===-1) return i;
    }
    return -1;
};
