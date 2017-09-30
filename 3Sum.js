/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    function sortNumber(a,b) {
        return a - b
    }
    var result = [];
    nums = nums.sort(sortNumber);
    for (i=0; i<nums.length-2; i++) {
        if (i>0 && nums[i] === nums[i-1]) continue;
        var l = i+1;
        var r = nums.length-1;
        while (l<r) {
            var triplets = [];
            
            if (nums[l]+nums[r] > nums[i]*-1) r--;
            else if (nums[l]+nums[r] < nums[i]*-1) l++;
            else if (nums[l]+nums[r] === nums[i]*-1) {
                triplets.push(nums[i],nums[l],nums[r]);
                result.push(triplets);
                triplets = [];
                r--;
                l++;
                while (nums[l] === nums[l-1] && nums[r] === nums[r+1]) {
                    l++;
                }
                
            }
    
        }
    }
    return result;
};
