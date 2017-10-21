/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    var res=0;
    for (i=0; i<32; i++) {
        var bitcount = 0;
        for (j=0; j<nums.length; j++) bitcount += (nums[j]>>i) & 1;
        res += bitcount*(nums.length-bitcount);
        
    }
    return res;
};
