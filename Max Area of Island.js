/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    var max_aera = 0;
    var h = grid.length;
    var w = grid[0].length;
    var count = 0;
    for (i=0; i<h; i++) {
        for (j=0; j<w; j++) {
            count = 0;
            if (grid[i][j]===1) {
                helper(i,j,h,w, grid);
                max_aera = Math.max(max_aera, count);
            }
        }
    }
    
    return max_aera;
    
    function helper(i,j,h,w, grid) {
        if (i>=0 && i<h && j>=0 && j<w && grid[i][j] === 1) {
            grid[i][j] = 0;
            count++;
            helper(i-1, j, h, w, grid);
            helper(i+1, j, h, w, grid);
            helper(i, j-1, h, w, grid);
            helper(i, j+1, h, w, grid);
        }
    }
};
