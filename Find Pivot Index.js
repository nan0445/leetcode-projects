/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var suml = 0;
    var sum = 0;
    for (var i=0; i<nums.length; i++) sum+=nums[i];
    for (i=0; i<nums.length; i++) {
        if (suml===sum-suml-nums[i]) return i;
        suml+=nums[i];
    }
    return -1;
};
