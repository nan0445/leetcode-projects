/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    var t = A.length;
    var p = A[0].length;
    var B = new Array(t);
    for (let i=0; i<t; i++) B[i] = new Array(p).fill(0);
    for (let i=0; i<A.length; i++) {
        for (let j=p-1; j>=0; j--) {
            B[i][p-j-1] = A[i][j]===1? 0 : 1;
        }
    }
    return B;
};
