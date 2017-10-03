/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var l=0;
    var r=nums.length-1;
    
    function sortNumber(a,b) {
        return a-b;
    }
    var temp = nums.slice();
    nums = nums.sort(sortNumber);
    var left = false;
    var right = false;
    while (l<r) {
        if (temp[l] !== nums[l]) left=true;
        else l++;
        if (temp[r] !== nums[r]) right = true;
        else r--;
        if (left === true && right === true) return r-l+1;
    }
    return 0;
};
