/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var l=0, r=nums.length-1;
    while (l<r) {
        var mid = l + Math.floor((r-l)/2);
        if (mid%2===0) d = 1;
        else d = -1;
        if (nums[mid]!==nums[mid+d]) r = mid-1;
        else l = mid+1;
    }
    return nums[l]===nums[l-1] ? nums[l+1] : nums[l];
};
