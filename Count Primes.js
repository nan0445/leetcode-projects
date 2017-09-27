/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    var isPrime = [];
    var count = 0;
    for (i=2; i<n; i++) {
        if (isPrime[i]===undefined) {
            count++;
            for (j=2; j*i<n; j++) {
                isPrime[j*i]=1;
            }
        }
    }
    return count;
};
