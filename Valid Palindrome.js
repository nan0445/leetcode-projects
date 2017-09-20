// isAlphaNumeric()
// or
/* var str = s.replace(/\W/g, '').toLowerCase();
    var rev = str.split('').reverse().join('');
    return rev === str; */
    
    /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    if (s.length <= 1) return true;
    var reg = /^[A-Za-z0-9]+$/;
    s = s.toLowerCase();
    var k = s.length;
    
    for (i=0; i<k; i++) {
        if (reg.test(s.charAt(i))) {
            
            for (j=k-1; j>=0; j--) {
                if (reg.test(s.charAt(j))) {
                    if (s.charAt(i) != s.charAt(j)) return false;
                    k = j;
                    break;
                }
            }
        }
        if (i >= j-2) break;
    }
    return true;

};
