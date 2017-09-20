/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0;
    for (i=0; i<nums.length; i++) sum += nums[i];
    return (1+nums.length)*nums.length/2-sum;
};
