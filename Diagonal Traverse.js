/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length===0) return [];
    var m = matrix.length;
    var n = matrix[0].length;
    var c = 0;
    var p=1, q=-1;
    var res = [];
    while (res.length<m*n) {
        if (c%2===0) {
            p--;
            q++;
        } else {
            p++;
            q--;
        }
        if (p<0 || q<0 || p>=m || q>=n) {
            if (c%2===0) {p++; if(q<n) {p--;q++;}}
            else {q++; if(p<m){p++;q--;}}
            c++;
        }
        else res.push(matrix[p][q]);
    }
    return res;
};
