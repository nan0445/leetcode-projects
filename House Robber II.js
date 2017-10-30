/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var result = [];
    var result2 = [];
    if (nums.length<1) return 0;
    if (nums.length===1) return nums[0];
    result[0] = 0;
    result[1] = nums[0];
    result2[0] = 0;
    result2[1] = nums[1];
    for (i=1; i<nums.length; i++) {
        if (i<nums.length-1) result[i+1] = Math.max(result[i], result[i-1]+nums[i]);
        if (i>1) result2[i] = Math.max(result2[i-1], result2[i-2]+nums[i]);
    }
    return Math.max(result[result.length-1], result2[result2.length-1]);
};
