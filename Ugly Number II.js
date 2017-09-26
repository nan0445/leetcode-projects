/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
    var idx2 = 0, idx3 = 0, idx5 = 0;
    var k = [];
    k[0] = 1;
    for (i=1; i<n; i++) {
        k[i] = Math.min(k[idx2]*2, Math.min(k[idx3]*3, k[idx5]*5));
        if (k[i] === k[idx2]*2) idx2++;
        if (k[i] === k[idx3]*3) idx3++;
        if (k[i] === k[idx5]*5) idx5++;
    }
    return k[n-1];
    
};
