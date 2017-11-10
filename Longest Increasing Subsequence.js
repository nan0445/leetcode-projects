/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var dp = [];
    var len = 0;
    for (var i=0; i<nums.length; i++) {
        var l=0, r=len;
        while (l<r) {
            var m = l+Math.floor((r-l)/2);
            if (dp[m]<nums[i]) l=m+1;
            else r=m;
        }
        dp[l]=nums[i];
        if (l===len) len++
    }
    return len;
};
