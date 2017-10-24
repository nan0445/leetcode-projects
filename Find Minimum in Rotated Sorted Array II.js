/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var l = 0, r = nums.length-1;
    while (l<r) {
        var mid = Math.floor((l+r)/2);
        if (nums[mid]<nums[l]) r = mid;
        else if (nums[mid]>nums[r]) l = mid+1;
        else r--;
        
    }
    return nums[l];
};
