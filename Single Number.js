/**
 * @param {number[]} nums
 * @return {number}
 */
/*var singleNumber = function(nums) {
    let result = nums[0];
    for(let i = 1; i < nums.length; i++){
        result = result^nums[i];
    }
    return result
};*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    if (nums.length === 1) return nums[0];
    nums= nums.sort();
    for (i=0; i<nums.length; i++) {
        if (nums[i] != nums[i+1]) return nums[i];
        else i++;
    }
};
