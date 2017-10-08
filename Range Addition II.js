/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length < 1) return m*n;
    var k = ops.length;
    var min1 = Number.MAX_VALUE;
    var min2 = Number.MAX_VALUE;
    for (i=0; i<k; i++) {
        min1 = Math.min(min1, ops[i][0]);
        min2 = Math.min(min2, ops[i][1]);
    }
    return min1*min2;
};
