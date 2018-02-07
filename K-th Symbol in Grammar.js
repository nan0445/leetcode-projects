/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    var count = 0;
    while (K>1) {
        for (var i=0; i<N; i++){
            if (K <= Math.pow(2,i)) break;
            //if (K === Math.pow(2,i)) return i%2;
        }
        K -= Math.pow(2,i-1);
        count++;
    }
    if (K===0 && count===1) return (i-1)%2;
    return count%2;
};
