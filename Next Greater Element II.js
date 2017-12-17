/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var res = new Array(nums.length).fill(-1);
    var stack = [];
    for (let i=0; i<nums.length; i++) {
        if (stack.length!==0 && nums[i]>nums[stack[stack.length-1]]) {
            while (nums[i]>nums[stack[stack.length-1]]) {
                res[stack[stack.length-1]] = nums[i];
                stack.pop();
            }
        }
        stack.push(i);
    }
    for (let i=0; i<nums.length; i++) {
        if (stack.length<=1) return res;
        while (nums[i]>nums[stack[stack.length-1]]) {
            res[stack[stack.length-1]] = nums[i];
            stack.pop();
        }
    }
    return res;
};
