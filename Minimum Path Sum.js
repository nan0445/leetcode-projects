/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    var m = grid.length, n = grid[0].length;
    var sum = new Array(m);
    for (i=0; i<m; i++) sum[i] = new Array(n);

    for (i=0; i<m; i++) {
        for (j=0; j<n; j++) {
            if (i>0 && j>0) sum[i][j] = Math.min(sum[i-1][j], sum[i][j-1]) + grid[i][j];
            else if (i>0 && j===0) sum[i][j] = sum[i-1][j] + grid[i][j];
            else if (i===0 && j>0) sum[i][j] = sum[i][j-1] + grid[i][j];
            else if (i===0 && j===0) sum[i][j] = grid[i][j];
        }
    }
    return sum[m-1][n-1];
};
