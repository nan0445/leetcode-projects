/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (matrix.length<1) return;
    var row = matrix.length, col = matrix[0].length;
    this.dp = new Array(row+1);
    this.dp[0] = [];
    for (var p=0; p<col+1; p++) this.dp[0][p]=0;
    for (var i=0; i<row; i++) {
        if (this.dp[i+1]===undefined) {
            this.dp[i+1]=[];
            for (var p=0; p<col+1; p++) this.dp[i+1][p]=0;
        }
        for (var j=0; j<col; j++) {
            this.dp[i+1][j+1]=this.dp[i+1][j]+this.dp[i][j+1]+matrix[i][j]-this.dp[i][j];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2+1][col2+1]-this.dp[row1][col2+1]-this.dp[row2+1][col1]+this.dp[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
