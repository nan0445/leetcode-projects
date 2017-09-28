/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    var set = {};
    var map = {};
    for (i=0; i<s.length; i++) {
        if (set[s[i]] === undefined) {
            set[s[i]] = i;
            if (map[t[i]] !== undefined) return false;
            else map[t[i]] = i;
        } else if (set[s[i]] !== undefined) {
            if (map[t[i]] === undefined || map[t[i]] !== set[s[i]]) return false;
        }
        
    }
    
    return true;
};
