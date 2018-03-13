/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    var dp = new Array(101);
    for (let i=0; i<101; i++) dp[i] = new Array(101).fill(0);
    dp[0][0] = poured;
    for (let i=0; i<100; i++) {
        for (let j=0; j<=i; j++) {
            var temp = (dp[i][j]-1)/2;
            if (temp>0) {
                dp[i+1][j]+=temp;
                dp[i+1][j+1]+=temp;
            }
        }
    }
    return Math.min(1,dp[query_row][query_glass]);
};
