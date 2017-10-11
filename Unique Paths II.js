/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    m = obstacleGrid.length;
    n = obstacleGrid[0].length;
    
    var flag = false;
    
    var arr = new Array(m);
    for(i=0; i<m; i++){
        arr[i] = new Array(n);
    }
    
    for(i = 0; i<m;i++){
        if (obstacleGrid[i][0] === 1) {flag = true; arr[i][0] = 0;}
        else if (flag === true) arr[i][0] = 0;
        else arr[i][0] = 1; 
    }
    flag = false;
    for(j= 0;j<n;j++){
        if (obstacleGrid[0][j] === 1) {flag = true; arr[0][j] = 0;}
        else if (flag === true) arr[0][j] = 0;
        else arr[0][j] = 1;
    }
    
    for(i=1; i<m; i++){
        for(j=1; j<n; j++){
            if (obstacleGrid[i][j] !== 1) arr[i][j] = arr[i-1][j] + arr[i][j-1];
            else arr[i][j] = 0;
        }
    }
    if (arr[m-1][n-1] === undefined) return 0;
    else return arr[m-1][n-1];
};
