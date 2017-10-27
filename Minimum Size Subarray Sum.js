/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var l=0, r=0, sum=0;
    var res = Number.MAX_VALUE;
    var flag = false;
    while (l<nums.length) {
        while (sum<s && r<nums.length) {
            sum += nums[r];
            r++;
        }
        if (sum>=s) {
            res = Math.min(res, r-l);
            flag = true;
        } 
        sum -= nums[l];
        l++;
        
    }
    return flag ? res : 0;
};
