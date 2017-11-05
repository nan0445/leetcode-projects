/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    var N=nums.length;
    nums.sort();
    var sum = 0;
    for (i=0; i<N; i++) sum+=nums[i];
    if (sum%k!==0 || nums[N-1]>target) return false;
    var target = sum/k;
    var dp = new Array(1<<N);
    var total = new Array(1<<N);
    dp[0]=true;
    total[0]=0;
    for (i=1; i<(1<<N); i++) {
        dp[i]= false;
        total[i]=0;
    }
    for (state=0; state<(1<<N); state++) {
        if (!dp[state]) continue;
        for (i=0; i<N; i++) {
            var future = state | (1<<i);
            if (state!==future && !dp[future]) {
                if (nums[i]<=target-(total[state]%target)) {
                    dp[future]=true;
                    total[future]=total[state]+nums[i];
                } else break;
            }
        }
    }
    return dp[(1<<N)-1];
    
};
