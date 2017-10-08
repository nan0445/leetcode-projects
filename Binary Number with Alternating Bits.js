/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    n = n.toString(2);
    for (i=1; i<n.length; i++) {
        if(n[i] === n[i-1]) return false;
    }
    return true;
};
