/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.dp=[];
    this.dp[0]=0;
    for (var i=0; i<nums.length; i++) this.dp[i+1]=this.dp[i]+nums[i];
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.dp[j+1]-this.dp[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
