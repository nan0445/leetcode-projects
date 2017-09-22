/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var n = triangle.length - 1;
    var minlen = triangle[n];
    for (layer=n-1; layer>=0; layer--) {
        for (i=0; i<=layer; i++) {
            minlen[i] = Math.min(minlen[i], minlen[i+1]) + triangle[layer][i];
        }
    }
    return minlen[0];
};
