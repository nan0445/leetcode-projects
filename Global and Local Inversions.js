/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function(A) {
    var tempL = A[0];
    var count = 0;
    for (let i=1; i<A.length; i++) {
        if (A[i]>A[i-1]) {
            if (A[i]<tempL) return false;
            if (A[i-1]>A[i-2]) tempL = A[i-1];
            if (A[i-1]<A[i-2]) tempL = A[i-2];
            count = 0;
        } else {
            if (A[i]<tempL && i>=2) return false;
            count++;
            tempL = A[i-1];
        }
        if (count>=2) return false;
    }
    return true;
};
