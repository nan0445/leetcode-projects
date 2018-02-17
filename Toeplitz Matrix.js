/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var h = matrix.length, w = matrix[0].length;
    for (let i=h-1; i>=0; i--) {
        var n=0, m=i; 
        var temp = matrix[m][n];
        while (m<h && n<w) {
            if (temp!==matrix[m][n]) return false;
            m++;
            n++;
        }
    }
    for (let i=1; i<w; i++) {
        var m=0, n=i;
        var temp = matrix[m][n];
        while (m<h && n<w) {
            if (temp!==matrix[m][n]) return false;
            m++;
            n++;
        }
    }
    return true;
};
