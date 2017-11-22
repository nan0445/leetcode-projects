/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    if (n===1) return [1];
    var res = new Array(n);
    res[0]=1;
    for (var i=1; i<=k; i++) {
        res[i]=res[i-1]+(k-i+1)*Math.pow(-1,(i+1)%2);
    }
    for (i=k+1; i<n; i++) res[i]=i+1;
    return res;
};
