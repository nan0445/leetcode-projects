/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var res = 1;  
    for (let i = 1; i <= n; i++)  res = res * 2 * (2*i-1)/(i+1);  
    return res;
};
