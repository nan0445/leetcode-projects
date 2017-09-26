/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (nums.length<=1) return false;
    var map = {};
    for (i=0; i<nums.length; i++) {
        if (t===0) var temp = nums[i];
        else temp = Math.floor(nums[i]/t);
        
        if (map[temp] !== undefined && Math.abs(i-map[temp])<=k && Math.abs(nums[i]-nums[map[temp]])<=t) return true;
        if (t===0) map[temp]=i;
        else {
            for (j=temp-1; j<=temp+1; j++) {
                map[j]=i;
            }
        }
        
        
    }
    return false;
};
