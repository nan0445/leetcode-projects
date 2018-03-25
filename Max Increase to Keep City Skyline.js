/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var t = [], l = [];
    for (let i=0; i<grid.length; i++) {
        var temp = 0;
        for (let j=0; j<grid[0].length; j++) {
            temp = temp<grid[i][j] ? grid[i][j] : temp;
        }
        l.push(temp);
    }
    for (let i=0; i<grid[0].length; i++) {
        var temp = 0;
        for (let j=0; j<grid.length; j++) {
            temp = temp<grid[j][i] ? grid[j][i] : temp;
        }
        t.push(temp);
    }
    var res = 0;
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            res += Math.min(l[i],t[j])-grid[i][j];
        }
    }
    return res;
};
