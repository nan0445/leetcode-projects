/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function(A, L, R) {
    var res = 0;
    var flag = false;
    var temp = [];
    var count = 0;
    for (let i=0; i<A.length; i++) {
        if (A[i]<=R && A[i]>=L) {
            flag = true;
            temp.push(A[i]);
            res += temp.length;
            count=temp.length;
        } else if (A[i]>R) {
            flag = false;
            temp = [];
            count = 0;
        } else if (A[i]<L) {
            temp.push(A[i]);
            if (flag) {
                res += count;
            }
        }
    }
    return res;
};
