/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var sum = new Array(nums.length+1);
    sum[0] = 0;
    var map = {};
    for (var i=1; i<=nums.length; i++) {
        sum[i]=sum[i-1]+nums[i-1];
        if (map[sum[i]]===undefined) map[sum[i]] = [i];
        else map[sum[i]].push(i);
    }
    var res = 0;
    for (i=0; i<=nums.length; i++) {
        if (map[sum[i]+k]!==undefined) {
            for (var j=0; j<map[sum[i]+k].length; j++) {
                if (map[sum[i]+k][j]<=i) {map[sum[i]+k].splice(j,1); j--;}
                else break;
            }
            res += map[sum[i]+k].length;
            if (map[sum[i]+k].length===0) map[sum[i]+k] = undefined;
        }
    }
    return res;
};

//////////////////////////////////////////////////////
/// This is a bottom up solution ////////////////////
/////////// Top down is faster and concise //////////

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    if (nums == null)
        return;
    var res = 0, hash={0:1},sum=0;
    
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(hash[sum-k])
            res += hash[sum-k];
        if(!hash[sum])
            hash[sum] = 1;
        else hash[sum]++;
    }
    return res;
};
