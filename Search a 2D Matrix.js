/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length===0) return false;
    var h = matrix.length;
    var w = matrix[0].length;
    if (target<matrix[0][0] || target>matrix[h-1][w-1]) return false;
    var l = 0, r = h;
    while (l<r && matrix[l][0]<target) {
        var mid = l + Math.floor((r-l)/2);
        if (matrix[mid][0]===target) return true;
        else if (matrix[mid][0]>target) r = mid;
        else l = mid+1;
    }
    if (l>=h) l = l-1;
    var p = matrix[l][0]<= target ? l : l - 1;
    l = 0, r = w;
    while (l<r) {
        var mid = l + Math.floor((r-l)/2);
        if (matrix[p][mid]===target) return true;
        else if (matrix[p][mid]>target) r = mid;
        else l = mid+1;
    }
    return false;
};
