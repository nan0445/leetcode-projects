/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    var sum = 0;
    var l = A.length;
    var F = 0;
    for (let i = 0; i < l; i++) {
        F += i * A[i];
        sum += A[i];
    }
    var max = F;
    for (let i = l - 1; i >= 1; i--) {
        F = F + sum - l * A[i];
        max = Math.max(F, max);
    }
    return max;   
};
