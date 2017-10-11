/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if (nums.length <= 1) return nums[0] === target ? 0 : -1;
    var l = 0, r = nums.length-1;
    var m = Math.floor((l+r)/2);
    while(l<r) {
        if (nums[m] === target) return m;
        else if (nums[m] > nums[nums.length-1]) {
            l=m+1;
            m=Math.floor((l+r)/2);
        } else if (nums[m] < nums[nums.length-1]) {
            r=m-1;
            m=Math.floor((l+r)/2);
        }
    }
    var startidx = nums[r] <= nums[nums.length-1] ? r : r+1;
    if (startidx === 0) {if (target<nums[0] || target>nums[nums.length-1]) return -1;}
    else {if (target<nums[startidx] || target>nums[startidx-1]) return -1;}
    
    var temp = [];
    temp = temp.concat(nums.slice(startidx)).concat(nums.slice(0, startidx-0));
    l = 0;
    r = nums.length-1;
    m = Math.floor((l+r)/2);
    
    while (l<=r) {
        if (temp[m] === target) return m+startidx>=nums.length ? m+startidx-nums.length : m+startidx;
        else if (temp[m] < target) {
            l=m+1;
            m=Math.floor((l+r)/2);
        } else if (temp[m] > target) {
            r=m-1;
            m=Math.floor((l+r)/2);
        }
    }
    
    return -1;
};

/////////// too long!!!!! /////////////////////
///more concise way, without re-rotate the array /////

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 The idea is that when rotating the array, there must be one half of the array that is still in sorted order.
For example, 6 7 1 2 3 4 5, the order is disrupted from the point between 7 and 1. So when doing binary search, we can make a judgement that which part is ordered and whether the target is in that range, if yes, continue the search in that half, if not continue in the other half.
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length-1;
    
    while(start <= end){
        var mid = Math.floor((start+end)/2);
        if(nums[mid] === target) return mid;
        
        //decide which half to do more searching
            if (nums[start] <= nums[mid]){
                 if (target < nums[mid] && target >= nums[start]) 
                    end = mid - 1;
                 else
                    start = mid + 1;
            } 
        
            else{
                if (target > nums[mid] && target <= nums[end])
                    start = mid + 1;
                 else
                    end = mid - 1;
            }
    }
    return -1;
};
