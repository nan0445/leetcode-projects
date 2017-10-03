/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    var h = grid.length;
    if (h < 1) return 0;
    var w = grid[0].length;
    for (i=0; i<h; i++) {
        for (j=0; j<w; j++) {
            if (grid[i][j] === "1") {
                helper(grid, i, j);
                count++;
                
            }
        }
    }
    return count;
    
    function helper(grid, i, j) {
        if (i<0||j<0||i>=h||j>=w||grid[i][j] !== "1") return;
        grid[i][j] = "0";
        helper(grid, i, j-1);
        helper(grid, i, j+1);
        helper(grid, i-1, j);
        helper(grid, i+1, j);
    }
};
