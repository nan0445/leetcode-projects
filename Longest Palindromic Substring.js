/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if (s.length<1) return [];
    if (s.length===1) return s[0];
    var start = 0, end = 0;
    var result = [];
    for (i=0; i<s.length; i++) {
        var l1 = isPalindrome(s, i, i);
        var l2 = isPalindrome(s, i, i+1);
        var l = Math.max(l1, l2);
        if (l> end - start) {
            start = i - Math.floor((l-1)/2);
            end = i + Math.floor(l/2);
        }
        result = s.slice(start, end+1);
    }
    
    function isPalindrome(s, left, right) {
        
        while (left>=0 && right<s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    return result;
};
