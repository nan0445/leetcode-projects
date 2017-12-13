/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var col = 1;
    var r = matrix.length;
    var c = matrix[0].length;
    for (let i=0; i<r; i++) {
        if (matrix[i][0]===0) col=0;
        for (let j=1; j<c; j++) {
            if (matrix[i][j]===0) {
                matrix[i][0]=0;
                matrix[0][j]=0;
            }
        }
    }
    for (let i=r-1; i>=0; i--) {
        for (let j=c-1; j>=1; j--) {
            if (matrix[i][0]===0 || matrix[0][j]===0) matrix[i][j]=0;
        }
        if (col===0) matrix[i][0]=0;
    }
};
