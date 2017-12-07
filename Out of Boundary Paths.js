/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
    let dp = new Array(m);
    let temp = new Array(m);
    for (var p=0; p<m; p++) {
        dp[p] = new Array(n).fill(0);
        temp[p] = new Array(n).fill(0);
    }
    dp[i][j]=1;
    var count = 0;
    var M = Math.pow(10, 9)+7;
    for (var k=1; k<=N; k++) {
        for (var x=0; x<m; x++) {
            for (var y=0; y<n; y++) {
                if (x===0) count = (count+dp[x][y]) % M;
                if (y===0) count = (count+dp[x][y]) % M;
                if (x===m-1) count = (count+dp[x][y]) % M;
                if (y===n-1) count = (count+dp[x][y]) % M;
                temp[x][y] = ((x>0 ? dp[x-1][y] : 0) % M  + (y>0 ? dp[x][y-1] : 0) % M + (x<m-1 ? dp[x+1][y] : 0) % M + (y<n-1 ? dp[x][y+1] : 0) % M) % M ;
            }
            
        }
        for (var xx=0; xx<m; xx++) dp[xx] = temp[xx].slice();
    }
    return count;
};

///////////////////////////////////////
///// another DP /////////////////////

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
    let dp = Array(N+1).fill().map(x=>Array(m).fill().map(x=>Array(n).fill(0)));
    for (let k = 1; k <= N; ++k) {
        for (let x = 0; x < m; ++x) {
            for (let y = 0; y < n; ++y) {
                let v1 = (x == 0) ? 1 : dp[k - 1][x - 1][y];
                let v2 = (x == m - 1) ? 1 : dp[k - 1][x + 1][y];
                let v3 = (y == 0) ? 1 : dp[k - 1][x][y - 1];
                let v4 = (y == n - 1) ? 1 : dp[k - 1][x][y + 1];
                dp[k][x][y] = (v1 + v2 + v3 + v4) % 1000000007;
            }
        }
    } 
    return dp[N][i][j];
};
