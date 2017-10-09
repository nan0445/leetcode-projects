/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = 0;
    var end = nums.length-1;
    var mid = Math.floor((start+end)/2);
    if (nums.length<1) return [-1,-1];
    if (target < nums[start] || target > nums[end]) return [-1, -1];
    
    while (start<end) {
        if (nums[mid]< target) {
            start = mid+1;
            mid = Math.floor((start+end)/2);
        } else if (nums[mid] > target) {
            end = mid-1;
            mid = Math.floor((start+end)/2);
        } else if (nums[mid] === target) {
            
            break;
        }
    }
    
    if (nums[mid] !== target) return [-1, -1];
    
    while (nums[start] !== target || nums[end] !== target) {
        if (nums[start] !== target) start++;
        if (nums[end] !== target) end--;
    }
    return [start, end];
};
