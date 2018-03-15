/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (s===null || s.length===0) return 0;
    var map = {};
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]===undefined) map[s[i]]=1;
        else map[s[i]]++;
    }
    var flag = true;
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]<k) flag = false;
    }
    if (flag) return s.length;
    var cur = 0, start = 0;
    var res = 0;
    while (cur<s.length) {
        if (map[s[cur]]<k) {
            res = Math.max(res, longestSubstring(s.slice(start,cur),k));
            start = cur+1;
        }
        cur++;
    }
    res = Math.max(res, longestSubstring(s.slice(start),k));
    return res;
};
