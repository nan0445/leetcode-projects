/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length===0) return 0;
    var dp = new Array(s.length+1).fill(0);
    dp[0] = (s[0]-0) === 0 ? 0 : 1;
    for (var i=1; i<s.length; i++) {
        if (((s[i-1]-0)*10+(s[i]-0))<=26 && (s[i-1]-0)!==0) dp[i] += i===1 ? 1 : dp[i-2];
        if ((s[i]-0) !== 0) dp[i] += dp[i-1];
    }
    return dp[i-1];
};
