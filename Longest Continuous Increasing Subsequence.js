/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length <= 1) return nums.length;
    var temp = [];
    temp[0] = nums[0];
    var result = temp.length;
    for (i=1; i<nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            temp = [];
        }
        temp.push(nums[i]);
        result = Math.max(result, temp.length);
    }
    return result;
};
