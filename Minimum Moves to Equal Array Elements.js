/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var sum = 0;
    var min = Number.MAX_VALUE;
    for (i= 0; i<nums.length; i++) {
        sum += nums[i];
        min = Math.min(nums[i], min);
    }
    
    return sum-nums.length*min;
};
