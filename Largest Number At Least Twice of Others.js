/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max = -Number.MAX_VALUE;
    var res = -1;
    var flag = false;;
    for (let i=0; i<nums.length; i++) {
        if (max<nums[i]*2) flag = false;
        if (nums[i]>max) {
            if (nums[i]>=max*2) flag = true;
            max = nums[i];
            res = i;
        }
    }
    return flag ? res : -1;
};
