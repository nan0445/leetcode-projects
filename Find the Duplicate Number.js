/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    for (i=0; i<nums.length; i++) {
        var idx = i;
        while (idx != -1) {
            idx = nums.indexOf(nums[i], idx + 1);
            if (idx != -1) return nums[idx];
        }
    }
};


/*
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    var fast = 0;
    var slow = 0;

    do {
        fast = nums[nums[fast]];
        slow = nums[slow];
    } while (fast != slow);
    
    fast = 0;
    while (fast != slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
};
*/
