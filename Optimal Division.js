/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    
    if (nums.length===1) return nums[0].toString();
    else if (nums.length>2) {
        nums[1]="("+nums[1].toString();
        nums[nums.length-1]=nums[nums.length-1].toString()+")";
    }
    return nums.join('/');
};
