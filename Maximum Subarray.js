var maxSubArray = function(nums) {
    if (nums === null || nums === []) {
        return null;
    }
    var cur = nums[0];
    var max_sub = nums[0];
    
    for (i=1; i<nums.length; i++) {
        cur = Math.max(cur+nums[i], nums[i]);
        max_sub = Math.max(cur, max_sub);
    }
    
    return max_sub;
};
