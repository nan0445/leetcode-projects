/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
    var n = 0, s = 1;
    for (let i=1; i<A.length; i++) {
        var n1 = Number.MAX_VALUE, s1 = Number.MAX_VALUE;
        if (A[i-1]<A[i] && B[i-1]<B[i]) {
            n1 = Math.min(n, n1);
            s1 = Math.min(s1, s+1);
        }
        if (A[i-1]<B[i] && B[i-1]<A[i]) {
            n1 = Math.min(n1,s);
            s1 = Math.min(s1, n+1);
        }
        n = n1;
        s = s1;
    }
    return Math.min(n,s);
};
