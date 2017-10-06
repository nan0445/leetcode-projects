/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var sum = (1+nums.length)*nums.length/2;
    var map = {};
    var result = [];
    var temp = 0;
    for (i=0; i<nums.length; i++) {
        if (map[nums[i]] === undefined) map[nums[i]] = 0;
        else result.push(nums[i]);
        temp += nums[i];
    }
    result.push(sum-temp+result[0]);
    return result;
};
