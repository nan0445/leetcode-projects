/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    function sortNumber(a, b) {
        return b-a;
    }
    
    nums.sort(sortNumber);
    
    return Math.max(nums[0]*nums[1]*nums[2], nums[0]*nums[nums.length-1]*nums[nums.length-2]);
};
