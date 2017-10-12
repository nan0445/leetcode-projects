/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function sortNumber(a,b) {return b-a;}
    nums.sort(sortNumber);
    return nums[k-1];
};
