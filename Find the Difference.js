/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var map = {};
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]===undefined) map[s[i]]=1;
        else map[s[i]]++;
    }
    for (let i=0; i<t.length; i++) {
        if (map[t[i]]===undefined || map[t[i]]===0) return t[i];
        else map[t[i]]--;
    }
};
