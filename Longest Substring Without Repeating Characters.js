/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = 0;
    var map = {};
    var j = 0;
    for (i=0; i<s.length; i++) {
        if (map[s[i]] !== undefined) j = Math.max(j, map[s[i]]);
        result = Math.max(result, i-j+1);
        map[s[i]] = i+1;
    }
    return result;
};
