/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let result = new Array(2);
    let xor = nums[0];
    for (let i = 1; i < nums.length; i++) {
        xor ^= nums[i];
    }

    let bit = xor & ~(xor - 1);
    let num1 = 0;
    let num2 = 0;

    for (let num of nums) {
        if ((num & bit) > 0) {
            num1 ^= num;
        }
        else {
            num2 ^= num;
        }
    }

    result[0] = num1;
    result[1] = num2;
    return result;
};


// or !!!!

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    if (nums.length<=2) return nums;
    nums = nums.sort();
    var two = [];
    for (i=0; i<nums.length; i++) {
        if (nums[i] != nums[i+1]) two.push(nums[i]);
        else i++;
        if (two.length === 2) break;
    }
    return two;
};
