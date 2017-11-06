/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (matrix.length<1) return [];
    var h = matrix.length;
    var w = matrix[0].length;
    var temp = [];
    var res = [];
    var visited = new Array(h);
    for (p=0; p<h; p++) {
        visited[p] = new Array(w);
        for (k=0; k<w; k++) {
            visited[p][k]=false;
        }
    }
    for (var i=0; i<h; i++) {
        for (var j=0; j<w; j++) {
            var gg = new Array(h);
            for (p=0; p<h; p++) gg[p] = new Array(w);
            temp = [0, 0];
            helper(i,j,matrix);
            if (temp[0]===1 && temp[1]===1) {res.push([i,j]); visited[i][j]=true}
        }
    }
    return res;
    
    function helper(m,n,matrix) {
        if (m-1<0 || n-1<0) temp[0]=1;
        if (m+1>=h || n+1>=w) temp[1]=1;
        if (temp[0]===1 && temp[1]===1) return;
        if (m-1>=0 && matrix[m-1][n]<=matrix[m][n]) {
            if (visited[m-1][n]) {temp=[1,1]; return;}
            else if (gg[m-1][n]===undefined) {gg[m-1][n]=1; helper(m-1, n, matrix);}
        }
        if (n-1>=0 && matrix[m][n-1]<=matrix[m][n]) {
            if (visited[m][n-1]) {temp=[1,1]; return;}
            else if (gg[m][n-1]===undefined) {gg[m][n-1]=1; helper(m, n-1, matrix);}
        }  
        if (m+1<h && matrix[m+1][n]<=matrix[m][n]) {
            if (visited[m+1][n]) {temp=[1,1]; return;}
            else if (gg[m+1][n]===undefined) {gg[m+1][n]=1; helper(m+1, n, matrix);}
        }
        if (n+1<w && matrix[m][n+1]<=matrix[m][n]) {
            if (visited[m][n+1]) {temp=[1,1]; return;}
            else if (gg[m][n+1]===undefined) {gg[m][n+1]=1; helper(m, n+1, matrix);}
        } 
    }
};
////////////////////////////////////////////////////
/// too slow ////////////////////////////////////////
//////// below the DFS is much faster!!////////////

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return [];
    
    var result = [], m = matrix.length, n = matrix[0].length, pacific = [], atlantic = [];
    
    for(var i = 0; i < m; i++) {
        pacific[i] = new Array(n);
        atlantic[i] = new Array(n);
    }
    
    for(var i = 0; i < m; i++){
        // first column
        dfs(matrix, i, 0, Number.MIN_SAFE_INTEGER, pacific);
        // last column
        dfs(matrix, i, n - 1, Number.MIN_SAFE_INTEGER, atlantic);
    }

    for(var j = 0; j < n; j++){
        // first row
        dfs(matrix, 0, j, Number.MIN_SAFE_INTEGER, pacific);
        // last row
        dfs(matrix, m - 1, j, Number.MIN_SAFE_INTEGER, atlantic);
    } 
    
    for(var i = 0; i < m; i++){
        for(var j = 0; j < n; j++){
            if(pacific[i][j] && atlantic[i][j]){
                result.push([i, j]);
            }
        }
    }
    
    return result;
};

function dfs(matrix, i, j, pre, visited) {
    if(i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) return;
    if(visited[i][j]) return;
    if(pre > matrix[i][j]) return;
    visited[i][j] = true;
    dfs(matrix, i + 1, j, matrix[i][j], visited);
    dfs(matrix, i - 1, j, matrix[i][j], visited);
    dfs(matrix, i, j + 1, matrix[i][j], visited);
    dfs(matrix, i, j - 1, matrix[i][j], visited);
}
