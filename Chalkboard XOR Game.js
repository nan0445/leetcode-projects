/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {
    var res = 0;
    for (let i=0; i<nums.length; i++) res ^= nums[i];
    if (res===0 || nums.length%2===0) return true;
    else return false;
};
