/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let one = 0, two = 0;
	for (var i = 0; i < nums.length; i++) {
		one = (one ^ nums[i]) & ~two;
		two = (two ^ nums[i]) & ~one;
	}
	return one;
};


// or !!!!!

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length<=1) return nums[0];
    nums = nums.sort();
    for (i=0; i<nums.length; i++) {
        if (nums[i] != nums[i+1]) return nums[i];
        else i += 2;
    }
};
