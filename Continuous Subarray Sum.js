/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length<2) return false;
    var sum = [];
    sum[0]=nums[0];
    sum[1]=sum[0]+nums[1];
    if (nums.length===2) {
        if (k===0) return nums[0]+nums[1]===0 ? true : false;
        else return (nums[0]+nums[1])%k===0 ? true : false;
    }
    for (i=2; i<nums.length; i++) {
        sum[i]=sum[i-1]+nums[i];
        if (sum[i]%k===0 || (k===0 && sum[i]===0)) return true;
        for (j=0; j<=i-2; j++) {
            if (((sum[i]-sum[j])%k===0) || (k===0 && sum[i]-sum[j]===0)) return true;
            }
    }
    return false;
    
};

///////////////////////////////////////////////
//// or using DP /////////////////////////////

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const dp = {0:-1}
    let sum = 0
    for(let index=0;index<nums.length;index++){
        sum+=nums[index]
        if(k!=0) sum %=k
        if(dp[sum]!=null){
            if(index-dp[sum]>=2) return true
        }else{
            dp[sum] = index
        }
    }
    return false
};
