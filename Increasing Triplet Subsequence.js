/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length<3) return false;
    var min = 0, max = 0, count = 0;
    if (nums[0]<nums[1]) {
        min = nums[0];
        max = nums[1];
        count = 2;
    } else {
        min = nums[1];
        max = nums[0];
        count = 1;
    }
    for (i=2; i<nums.length; i++) {
        if (nums[i]>nums[i-1]) {
            if (count===1) count++;
            else if (count===2 && nums[i]>max) count++;
            if (count===3) return true;
            max = nums[i];
        } else if (nums[i]<nums[i-1]) {
            if (nums[i]<min) min=nums[i];
            else if (nums[i]<max && nums[i]>min) max = nums[i];
        }
    }
    return false;
};
