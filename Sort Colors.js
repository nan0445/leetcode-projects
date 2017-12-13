/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var n = nums.length;
    for (let i=0; i<n; i++) {
        if (nums[i]===0) {
            nums.splice(i,1);
            nums.splice(0,0,0);
        } else if (nums[i]===2) {
            nums.splice(i,1);
            nums.push(2);
            n--;
            i--;
        }
    }
};
