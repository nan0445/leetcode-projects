/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var n = nums.length-1;
    for (i=0; i<n; i++) {
        if (nums[i]===0) {
            nums.splice(i,1);
            nums.push(0);
            i--;
            n--;
        }
    }
    
};
