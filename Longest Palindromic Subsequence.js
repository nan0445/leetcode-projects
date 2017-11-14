/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    var len = s.length;
    var dp = new Array(len);
    for (var p=0; p<len; p++) {
        dp[p] = new Array(len);
        for (var k=0; k<len; k++) dp[p][k]=0;
    }
    for (var i=len-1; i>=0; i--) {
        dp[i][i]=1;
        for (var j=i+1; j<len; j++) {
            if (s[i]===s[j]) dp[i][j] = dp[i+1][j-1]+2;
            else dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
        }
    }
    return dp[0][len-1];
};
