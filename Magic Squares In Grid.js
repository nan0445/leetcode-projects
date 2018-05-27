/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    var h=grid.length;
    if (h===0) return 0;
    var w= grid[0].length;
    var flag = true;
    var count=0;
    for (let i=0; i<=h-3; i++) {
        for (let j=0; j<=w-3; j++) {
            var map = {};
            flag = true;
            for (let p=i; p<=i+2; p++) {
                if (grid[p][j]+grid[p][j+1]+grid[p][j+2] !== 15) {flag = false; break;}
            }
            if (!flag) continue;
            for (let q=j; q<=j+2; q++) {
                if (grid[i][q]+grid[i+1][q]+grid[i+2][q] !== 15) {flag = false; break;}
            }
            if ((grid[i][j]+grid[i+1][j+1]+grid[i+2][j+2] !== 15) || (grid[i+2][j]+grid[i+1][j+1]+grid[i][j+2] !== 15)) {flag = false; break;}
            for (let p=i; p<=i+2; p++) {
                if (!flag) break;
                for (let q=j; q<=j+2; q++) {
                    if (grid[p][q]<1 || grid[p][q]>9) {flag = false; break;}
                    if (map[grid[p][q]]!==undefined) {flag = false; break;}
                    else map[grid[p][q]]=1;
                }
            }
            if (flag) count++;
        }
    }
    return count;
};
