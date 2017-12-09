/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var dp = new Array(A.length+1);
    for (var k=0; k<=A.length; k++) dp[k] = new Array(B.length+1).fill(0);
    var res = 0;
    for (var i=0; i<A.length; i++) {
        for (var j=0; j<B.length; j++) {
            if (A[i]===B[j]) {
                dp[i+1][j+1] = dp[i][j] + 1;
                res = Math.max(res, dp[i+1][j+1]);
            }
        }
    }
    return res;
};
