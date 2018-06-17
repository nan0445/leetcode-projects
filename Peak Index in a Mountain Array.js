/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var flag = false;
    for (let i=1; i<A.length; i++) {
        if (A[i]>A[i-1]) flag = true;
        if (flag) {
            if (A[i]<A[i-1]) return i-1;
        }
    }
};
