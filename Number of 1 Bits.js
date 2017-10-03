/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    for (i=0; n; i++) {
        n &= n-1;
    }
    return i;
};
