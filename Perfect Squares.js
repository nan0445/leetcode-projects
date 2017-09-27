/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    var result = [];
    for (i=0; i<=n; i++) {
        result.push(Number.MAX_VALUE);
        
    }
    result[0] = 0;
    
    for (i=1; i<=n; i++) {
        for (j=1; (j*j)<=i; j++) {
            result[i] = Math.min(result[i], result[i-j*j]+1);
        }
    }
    return result[n];
};
