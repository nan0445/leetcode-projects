/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    backtrack(nums, result, [], 0);
    return result;
    
    function backtrack(nums, result, temp, start) {
        result.push(temp);
        var i=0;
        for (i=start; i<nums.length; i++) {
            temp.push(nums[i]);
            backtrack(nums, result, temp.slice(), i+1);
            temp.pop();
        }
    }
};

