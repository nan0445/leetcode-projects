/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var res = -Number.MAX_VALUE;
    for (var i=0; i<=nums.length-k; i++) {
        res = Math.max(res, (nums[i]+nums[i+1]+nums[i+2]+nums[i+3])/4);
    }
    return res;
};

/////////////////////////////////////////////
/// this could be better in time //////////////

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var i, j;
    var max = -10000;
    var sum = 0;
    for (i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum / k;
    for (i = 0, j = k; j < nums.length; i++,j++) {
        sum = sum - nums[i] + nums[j];
        max = Math.max(max, sum / k);
    }
    return max;
};
