/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var temp = s.split('').sort();
    var result = 0;
    if (temp.length <= 1) return temp.length;
    for (i=1; i<temp.length; i++) {
        if (temp[i] === temp [i-1]) {
            result+=2;
            i++;
        }
    }
    if (result<temp.length) result++;
    return result;
};
