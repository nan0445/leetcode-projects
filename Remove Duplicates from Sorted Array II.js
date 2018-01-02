/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var count = 0;
    for (let i=1; i<nums.length; i++) {
        if (nums[i]===nums[i-1]) count++;
        else count = 0;
        if (count>=2) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
