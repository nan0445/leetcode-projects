/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    var res = 0;
    var pro = 1;
    var temp = [];
    for (var i=0; i<nums.length; i++) {
        if (nums[i]>=k) {
            pro = 1;
            temp = [];
            continue;
        }
        pro *= nums[i];
        temp.push(nums[i]);
        while (pro>=k && temp.length>0) {
            pro /= temp[0];
            temp.splice(0,1);
        }
        res += temp.length;
    }
    return res;
};
