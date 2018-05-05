/**
 * @param {number[]} A
 * @return {number}
 */
var numFactoredBinaryTrees = function(A) {
    function sortNumber(a,b) {return a-b;}
    A.sort(sortNumber);
    var ind = {};
    var dp = new Array(A.length).fill(1);
    var res = 0;
    for (let i=0; i<A.length; i++) ind[A[i]] = i;
    for (let i=0; i<A.length; i++) {
        for (let j=0; j<i; j++) {
            if (A[i]%A[j]===0) {
                var p = A[i]/A[j];
                if (ind[p]!==undefined) dp[i] = dp[i] + dp[j]*dp[ind[p]];
                dp[i] = dp[i] % 1000000007;
            }
            
        }
    }
    for (let i=0; i<A.length; i++) res += dp[i];
    return res % 1000000007;
    
    
};
