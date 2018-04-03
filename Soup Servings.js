/**
 * @param {number} N
 * @return {number}
 */
var soupServings = function(N) {
    N = parseInt(Math.floor(N/25) + (N%25>0 ? 1 : 0));
    if (N>250) return 1;
    let dp = new Array(N+1);
    for (let i=0; i<dp.length; i++) dp[i] = new Array(N+1).fill(0);
    return helper(N, N, 1);
    
    function helper(A,B,P) {
        if (A<=0 && B<=0) return 0.5*P;
        else if (A<=0) return P;
        else if (B<=0) return 0;
        else if (dp[A][B]>0) return dp[A][B];
        else return dp[A][B] = helper(A-4,B, P/4) + helper(A-3, B-1, P/4) + helper(A-2, B-2, P/4) + helper(A-1, B-3, P/4);
    }
};
