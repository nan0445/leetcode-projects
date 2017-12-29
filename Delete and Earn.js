/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    if (nums.length===0) return 0;
    function sortNumber(a,b) {return a-b;}
    nums.sort(sortNumber);
    var N = [], M = [];
    var temp = nums[0];
    var sum = nums[0];
    for (let i=1; i<nums.length; i++) {
        if (nums[i]===temp) {
            sum += temp;
        } else {
            M.push(sum);
            N.push(temp);
            temp = nums[i];
            sum = nums[i];
        }
    }
    M.push(sum);
    N.push(temp);
    var dp = [];
    dp[0] = 0;
    dp[1] = M[0];
    var max = dp[1];
    for (let i=1; i<M.length; i++) {
        if (N[i]===N[i-1]+1) dp[i+1] = Math.max(dp[i], M[i]+dp[i-1]);
        else dp[i+1] = M[i]+dp[i];
        if (dp[i+1]>max) max = dp[i+1];
    }
    return max;
};
