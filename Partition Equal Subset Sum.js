/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.length<1) return true;
    var sum = 0;
    for (i=0; i<nums.length; i++) sum+=nums[i];
    if (sum%2!==0) return false;
    sum = sum/2;
    var dp = new Array(sum+1);
    dp[0] = true;
    for (i=1; i<=sum; i++) dp[i] = false;
    for (i=0; i<nums.length; i++) {
        for (j=sum; j>=nums[i]; j--) {
            dp[j] = dp[j] || dp[j-nums[i]];
            if (dp[sum]===true) return true;
        }
    }
    return dp[sum];
};
