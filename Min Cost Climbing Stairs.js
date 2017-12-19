/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i=2; i<cost.length; i++) {
        dp[i]=Math.min(dp[i-1]+cost[i], dp[i-2]+cost[i]);
    }
    return dp[dp.length-1]>dp[dp.length-2] ? dp[dp.length-2] : dp[dp.length-1];
};
