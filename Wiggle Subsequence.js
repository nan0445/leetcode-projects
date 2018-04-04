/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length<=1) return nums.length;
    var n = nums[1]>nums[0] ? 1 : -1;
    if (nums[1]===nums[0]) n=0;
    var count = n===0 ? 1 : 2;
    for (let i=2; i<nums.length; i++) {
        if (nums[i]===nums[i-1]) continue;
        if ((nums[i]-nums[i-1]>0) && (n<=0)) {
            n = 1;
            count++;
        } else if ((nums[i]-nums[i-1]<0) && (n>=0)) {
            n = -1;
            count++;
        } else if (n===0) {
            n = nums[i]>nums[i-1] ? 1 : -1;
        }
        
    }
    return count;
};
