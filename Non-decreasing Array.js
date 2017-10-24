/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var count = 0;
    for (i=0; i<nums.length-1; i++) {
        
        if (nums[i]>nums[i+1]) {
            count++;
            if (i===0) nums[i]=nums[i+1];
            else if (nums[i+1]>=nums[i-1]) nums[i] = nums[i+1];
            else if (nums[i+1]<nums[i-1]) nums[i+1] = nums[i];
        }
        if (count > 1) return false;
    }
    return true;
};
