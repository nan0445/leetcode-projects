/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length<=1) return false;
    var l = s.length;
    var hl = Math.floor(l/2);
    if (s.slice(0,hl).concat(s.slice(0,hl)) === s) return true;
    for (i=3; i<=hl; i+=2) {
        if (l%i === 0) {
            var temp = "";
            for (j=0; j<i; j++) {
                temp += s.slice(0,l/i);
            }
            if (temp === s) return true;
        }
        
    }
    var temp2 = "";
    for (k=0; k<l; k++) {
        temp2 += s[0];
    }
    if (temp2 === s) return true;
    return false;
};
