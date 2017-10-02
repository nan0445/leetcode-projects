/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var h = grid.length;
    var w = grid[0].length;
    var parimeter = 0;
    for (i=0; i<h; i++) {
        for (j=0; j<w; j++) {
            var temp = 4;
            if (grid[i][j]===1) {
                if (j-1>=0 && grid[i][j-1] === 1) temp--;
                if (j+1<w && grid[i][j+1] === 1) temp--;
                if (i-1>=0 && grid[i-1][j] === 1) temp--;
                if (i+1<h && grid[i+1][j] === 1) temp--;
                parimeter += temp;
            }
        }
    }
    return parimeter;
};
