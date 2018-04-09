/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
    var l = A.length;
    var S = new Array(l+1).fill(0);
    for (let i=0; i<l; i++) S[i+1] = S[i]+A[i];
    var dp = new Array(l);
    for (let i=0; i<l; i++) dp[i] = (S[l]-S[i])/(l-i);
    for (let i=0; i<K-1; i++) {
        for (let j=0; j<l; j++) {
            for (let k=j+1; k<l; k++) {
                dp[j] = Math.max(dp[j], (S[k]-S[j])/(k-j)+dp[k]);
            }
        }
    }
    return dp[0];
};
