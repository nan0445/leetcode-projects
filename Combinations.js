/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    var temp = [];
    
    function helper (start, k, n) {
        if (k===0) {
            res.push(temp.slice());
            return;
        }
        for (var i=start; i<=n; i++) {
            temp.push(i);
            helper(i+1, k-1, n);
            temp.pop();
        }
    }
    helper (1, k, n);
    return res;
    
};
