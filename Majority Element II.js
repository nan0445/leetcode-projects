/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums.length<=1) return nums;
    var count1=0, count2=0, num1=nums[0], num2=nums[0];
    for (var i=0; i<nums.length; i++) {
        if (nums[i]===num1) count1++;
        else if (nums[i]===num2) count2++;
        else if (count1===0) {
            num1=nums[i];
            count1=1;
        }
        else if (count2===0) {
            num2=nums[i];
            count2=1;
        }
        else {count1--; count2--;}
    }
    count1=0;
    count2=0;
    for (i=0; i<nums.length; i++) {
        if (nums[i]===num1) count1++;
        else if (nums[i]===num2) count2++;
    }
    var res = [];
    if (count1>Math.floor(nums.length/3)) res.push(num1);
    if (count2>Math.floor(nums.length/3)) res.push(num2);
    return res;
};
