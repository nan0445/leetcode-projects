/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    
    var k = primes.length;
    var indx = [];
    for (i=0; i<k; i++) {
        indx[i] = 0;
    }
    var result = [];
    result[0] = 1;
    for (i=1; i<n; i++) {
        for (j=0; j<k; j++) {
            if (j===0)  result[i] = result[indx[j]]*primes[j];
            else result[i] = Math.min(result[indx[j]]*primes[j], result[i]);
        }
        for (j=0; j<k; j++) {
            if (result[i] === result[indx[j]]*primes[j]) indx[j]++;
        }
    }
    return result[n-1];
};
