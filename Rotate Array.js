/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const index = nums.length - k;
    
  const removed = nums.splice(index, k);
  nums.unshift(...removed);  
    
};

// OR /////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var step = k % nums.length;
    for (i=0; i<step; i++) {
        var temp = nums.pop();
        nums.unshift(temp);
    }
};
