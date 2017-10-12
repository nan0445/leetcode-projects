/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
   
    var nums = [];
    for (i=1; i<=n; i++) nums.push(i);
    var result = [];
    var fact = [];
    fact.push(1);
    var sum = 1;
    for (i=1; i<=n; i++) {
        sum *= i;
        fact.push(sum);
    }
    k=k-1;
    for (i=n-1; i>=0; i--) {
        var temp = Math.floor(k/fact[i]);
        result.push(nums[temp]);
        nums.splice(temp,1);
        k = k % fact[i];
        
    }
    
    return result.toString().split(',').join('');
};
