/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = [];
    function SortNumber(a, b) {
        return a-b;
    }
    nums = nums.sort(SortNumber);
    var l = nums.length;
    if (nums.length <= 1) return [];
    for (i=0; i<l; i++) {
        if (i>0 && nums[i] === nums[i-1]) {
            nums.splice(i,1);
        }
        if (nums[i] !== i+1) {
            result.push(i+1);
            nums.splice(i,0,i+1);
        }
    }
    return result;
};

/////////////////////////////////////////////////
///// Or flip the numbers, and leave the missing ones

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = [];
    var l = nums.length;
    
    for (i=0; i<l; i++) {
        var idx = Math.abs(nums[i])-1;
        if (nums[idx] > 0) nums[idx] *= -1;
    }
    
    for (i=0; i<l; i++) {
        if (nums[i] > 0) result.push(i+1);
    }
    return result;
};
