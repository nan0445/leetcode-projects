/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    var dp = new Array(nums.length+1).fill(0);
    for (let i=nums.length-1; i>=0; i--) {
        dp[i]=nums[i];
        for (let j=i+1; j<nums.length; j++) {
            dp[j] = Math.max(nums[i]-dp[j], nums[j]-dp[j-1]);
        }
    }
    return dp[nums.length-1]>=0;
};
