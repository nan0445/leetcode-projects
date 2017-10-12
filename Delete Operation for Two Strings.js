/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    var C = new Array(m);
    for (i=0; i<=m; i++)  {
        C[i] = new Array(n);
        C[i][0] = 0;
    }
    for (j=0; j<=n; j++) C[0][j] = 0;
    for (i=1; i<=m; i++) {
        for (j=1; j<=n; j++) {
            if (word1[i-1] === word2[j-1]) C[i][j] = C[i-1][j-1] + 1;
            else C[i][j] = Math.max(C[i-1][j], C[i][j-1]);
        }
    }
    return m+n-C[m][n]*2;
};
