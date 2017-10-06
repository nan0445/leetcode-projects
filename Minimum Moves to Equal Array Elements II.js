/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    function sortNumber(a, b) {
        return a-b;
    }
    if (nums.length<=1) return 0;
    nums.sort(sortNumber);
    var n = Math.floor(nums.length/2)-1;
    var sum1 = 0, sum2 = 0;
    for (i=0; i<nums.length; i++) {
        sum1 += Math.abs(nums[i]-nums[n]);
        sum2 += Math.abs(nums[i]-nums[n+1]);
    }
    return Math.min(sum1, sum2);
};
