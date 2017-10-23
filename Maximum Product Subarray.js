/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    var maxres = -Number.MAX_VALUE;
    for (i=0; i<nums.length; i++) {
        if (nums[i]===1 && i>0 && maxres>1) continue;
        var res = nums[i];
        maxres = Math.max(maxres, res);
        //var temp = maxres;
        //var p = i;
        for (j=i+1; j<nums.length; j++) {
            if (nums[j]===0) break;
            res *= nums[j];
            maxres = Math.max(maxres, res);
            //if (maxres>temp) {p=j; temp = maxres;}
        }
        //if (p>i) i = p-1;
    }
    return maxres;
};

////////////////////////////////////////////////////////////////
/// DFS is very slow////////////////////////////////////////////
///////below is smarter////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    var max = nums[0];
    var min = nums[0];
    var ans = nums[0]
    for (var i = 1; i < nums.length; i++) {
        var tmp = max;
        max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
        min = Math.min(Math.min(tmp * nums[i], min * nums[i]), nums[i]);
        if (max > ans) {
            ans = max;
        }
    }
    
    return ans;
};
