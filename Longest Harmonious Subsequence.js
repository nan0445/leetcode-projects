/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var map = {};
    var maxlen = 0;
    for (i=0; i<nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        }
        else map[nums[i]]++;
        
        if (map[nums[i]-1] !== undefined) {
            maxlen = Math.max(maxlen, map[nums[i]]+map[nums[i]-1]);
        }
        if (map[nums[i]+1] !== undefined) {
            maxlen = Math.max(maxlen, map[nums[i]]+map[nums[i]+1]);
        }
        
        
    }
    return maxlen;
};
