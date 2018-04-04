/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var temp = [];
    //var n = Math.ceil(Math.sqrt(k));
    var n = matrix.length;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            temp.push(matrix[i][j]);
        }
    }
    function sortNumber(a,b) {return a-b;}
    temp.sort(sortNumber);
    return temp[k-1];
};
