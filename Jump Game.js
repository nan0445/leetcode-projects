/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    if (nums.length===1) return true;
    var zero = [];
    for (i=0; i<nums.length; i++) {
        if (nums[i]===0) zero.push(i);
    }
    if (zero.length===0) return true;
    if (zero[0]===0) return false;
    for (i=0; i<zero.length; i++) {
        var count = false;
        for (j=zero[i]-1; j>=0; j--) {
            if (nums[j]>zero[i]-j) count = true;
            if (nums[j]===zero[i]-j && nums.length-1 === zero[i]) count = true;
        }
        if (count===false) return count;
        
    }
    
    return count;
};

/////////////////////////////////////////////////////
//// very good solution below///////////////////////

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// [5, 4, 0, 0, 0, 0, 0]

const canJump = (nums) => {
    let maxJump = nums[0];
    
    for (let i = 1; i <= nums.length - 1; i++) {
        if (!maxJump) return false;
        maxJump = Math.max(maxJump - 1, nums[i]);
    }
    return true;
};
