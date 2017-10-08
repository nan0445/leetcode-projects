/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    function sortNumber(a, b) {
        return a-b;
    }
    
    nums.sort(sortNumber);
    var sum = 0;
    for (i=0; i<nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};
