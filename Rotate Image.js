/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var l = 0, r = matrix.length-1;
    while (l<r) {
        var temp = matrix[l].slice();
        matrix[l] = matrix[r];
        matrix[r] = temp;
        l++;
        r--;
    }
    for (i=0; i<matrix.length; i++) {
        for (j=i+1; j<matrix[0].length; j++) {
            var temp2 = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp2;
        }
    }
};


///////////////////////////////////////////////////////
/// The first loop can be replaced by matrix.reverse();
