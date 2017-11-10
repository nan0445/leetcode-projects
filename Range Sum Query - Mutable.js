/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.temp = nums;
    this.dp=[];
    this.dp[0]=0;
    for (var i=0; i<nums.length; i++) this.dp[i+1]=this.dp[i]+nums[i];
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.temp[i]=val;
    for (var p=i; p<this.temp.length; p++) this.dp[p+1]=this.dp[p]+this.temp[p];
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
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
