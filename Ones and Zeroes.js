/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    function count (s) {
        var res = [0, 0];
        for (p=0; p<s.length; p++) res[s.charCodeAt(p)-'0'.charCodeAt(0)]++;
        return res;
    }
    
    var dp = new Array(m+1);
    for (x=0; x<=m; x++) {
        dp[x] = new Array(n+1);
        for (y=0; y<=n; y++) {
            dp[x][y]=0;
        }
    }
   
    for (i=0; i<strs.length; i++) {
        var temp = count(strs[i]);
        for (j=m; j>=temp[0]; j--) {
            for (k=n; k>=temp[1]; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j-temp[0]][k-temp[1]]+1);
            }
        }
    }
    return dp[m][n];
};
