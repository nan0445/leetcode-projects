/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var maxc = 0;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] === 1) count++;
        else count = 0;
        maxc = Math.max(maxc, count);
    }
    return maxc;
};
