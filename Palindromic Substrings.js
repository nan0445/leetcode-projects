/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    count=0;
    for (var i=0; i<s.length; i++) {
        isPalindromic(s, i , i);
        isPalindromic(s, i, i+1);
    }
    return count;
    
    function isPalindromic(s, m, n) {
        while (m>=0 && n<s.length && s[m]===s[n]) {
            count++;
            m--; 
            n++;
        }
    }
};
