/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    var result = [];
    if (nums.length<1) return 0;
    if (nums.length===1) return nums[0];
    result[0] = 0;
    result[1] = nums[0]
    for (i=1; i<nums.length; i++) {
        result[i+1] = Math.max(result[i], result[i-1]+nums[i]);
    }
    return result[i];
};
