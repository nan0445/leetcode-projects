/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
    var mod = Math.pow(10,9)+7;
    var dp = new Array;
    dp[0] = 1;
    dp[1] = 0;
    dp[2] = 0;
    dp[3] = 0;
    for (let i = 0; i < N; i++) {
        var ndp = dp.slice();
        ndp[0] = (dp[0] + dp[3]) % mod;
        ndp[1] = (dp[0] + dp[2]) % mod;
        ndp[2] = (dp[0] + dp[1]) % mod;
        ndp[3] = (dp[0] + dp[1] + dp[2]) % mod;
        dp = ndp.slice();
    }
    return dp[0];
    
};
