/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var count = 0;
    for (var i=1; i<s.length; i++) {
        var l=i-1, r=i;
        while (l>=0 && r<s.length) {
            if (s[r]!==s[l] && s[r]===s[i]) {
                count++;
                r++;
                l--;
            } else break;
        }
    }
    return count;
};
