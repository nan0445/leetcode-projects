/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var map = {};
    for (var i=0; i<A.length; i++) {
        for (var j=0; j<B.length; j++) {
            if (map[A[i]+B[j]]===undefined) map[A[i]+B[j]]=1;
            else map[A[i]+B[j]]++;
        }
    }
    var res=0;
    for (i=0; i<C.length; i++) {
        for (j=0; j<D.length; j++) {
            var sum = C[i]+D[j];
            if (map[-sum]!==undefined) res += map[-sum];
        }
    }
    return res;
};
