/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    function sortNumber(a, b) {
        return b-a;
    }
    nums.sort(sortNumber);
    
    var count = 0;
    var map = {};
    for (i=0; i<nums.length-1; i++) {
        for (j=i+1; j<nums.length; j++) {
            if (nums[i]-nums[j]>k) break;
            if (nums[i]-nums[j] === k) {
                if (map[[nums[i], nums[j]]] === undefined) {
                    count++;
                    map[[nums[i], nums[j]]] = 1;
                    map[[nums[j], nums[i]]] = 1;
                }
                
            }
        }
    }
    return count;
};
