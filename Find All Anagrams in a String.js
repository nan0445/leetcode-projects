/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var result = [];
    var count = p.length;
    var map = {};
    for (i=0; i<p.length; i++) {
        if (map[p[i]] === undefined) map[p[i]] = 1;
        else map[p[i]]++;
    }
    for (i=0; i<s.length; i++) {
        if (i>=p.length && map[s[i-p.length]]++ >= 0 ) {
            //map[s[i-p.length]]++;
            count++;
        } 
        if (map[s[i]] !== undefined && map[s[i]]-- > 0) {
            //map[s[i]]--;
            count--;
        }
        if (count === 0) result.push(i-p.length+1);   
    }
    return result;
};

////////////////////////////////////////////////////////
///if (map[s[i]] !== undefined && map[s[i]]-- > 0)
// first do the ">", then do the "--"
