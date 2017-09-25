/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[Math.floor(nums.length/2)];
};

/////////////////////////////////////
// I think below way is for the element that occurred the most time, not over n/2 necessary

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maj = nums[0];
    let count = 1;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === maj) {
            count++;
        } else {
            count--;
            if (count === 0) {
                maj = nums[j];
                count = 1;
            }
        }
    }
    return maj;
};
