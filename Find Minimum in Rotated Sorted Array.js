/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    if (nums.length===1) return nums[0];
    var l = 0, r = nums.length-1;
    if (nums[r]<nums[l] && nums[r]<nums[r-1]) return nums[r];
    if (nums[l]<nums[l+1] && nums[l]<nums[r]) return nums[l];
    while (l<r) {
        var mid = Math.floor((l+r)/2);
        if (nums[mid]<nums[mid+1] && nums[mid]<nums[mid-1]) return nums[mid];
        if (nums[mid]<nums[l]) r = mid-1;
        else if (nums[mid]>nums[r]) l = mid+1;
        else return nums[l]>nums[r+1] ? nums[r+1] : nums[l]
    }
    return nums[l]
};
