/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var res = new Array(findNums.length).fill(-1);
    var map = {};
    var stack = [];
    for (let i=0; i<nums.length; i++) {
        if (stack.length!==0 && nums[i]>stack[stack.length-1]) {
            while (nums[i]>stack[stack.length-1]) {
                map[stack[stack.length-1]] = nums[i];
                stack.pop();
            }
        }
        stack.push(nums[i]);
    }
    for (let i=0; i<findNums.length; i++) {
        if (map[findNums[i]]!==undefined) res[i]=map[findNums[i]];
    }
    return res;
};
