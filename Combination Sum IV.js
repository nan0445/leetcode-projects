/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var result = [];
    result[0] = 1;
    for (i=1; i<=target; i++) {
        result[i] = 0;
        for (var j in nums) {
            if (i>=nums[j]) result[i] += result[i-nums[j]];
        }
    }
    return result[target];
};
