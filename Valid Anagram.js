/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sl = s.length;
    if (sl !== t.length && sl !== 0) return false;
    var map = {};
    for (i=0; i<sl; i++) {
        if (map[s[i]] !== undefined) map[s[i]]++;
        else map[s[i]] = 1;
    }
    var count = sl;
    for (i=0; i<t.length; i++) {
        if (map[t[i]] === undefined) return false;
        else if (map[t[i]]-->0) {
            
            count--;
        }
    }
    if (count===0) return true;
    else return false;
};
