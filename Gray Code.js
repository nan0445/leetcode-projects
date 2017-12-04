/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var res = [];
    for (var i=0; i<1<<n; i++) res.push(i^i>>1);
    return res;
};
