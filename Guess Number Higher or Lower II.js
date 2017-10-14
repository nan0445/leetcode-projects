/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    var table = new Array(n+1);
    for (i=0; i<=n; i++) {
        table[i] = new Array(n+1);
        for (j=0; j<=n; j++) {
            table[i][j] = 0;
        }
    }
    for (j=2; j<=n; j++) {
        for (i=j-1; i>0; i--) {
            var g_min = Number.MAX_VALUE;
            for (k=i+1; k<j; k++) {
                var l_max = Math.max(table[i][k-1], table[k+1][j]) + k;
                g_min = Math.min(g_min, l_max);
            }
            table[i][j] = i+1===j ? i : g_min;
        }
    }
    
    return table[1][n];
};
