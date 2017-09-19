/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var l = new Array()
    var g = new Array()
    n = prices.length;
    if (n<=1) return 0;
    var diff =0;
    for (i=0; i<n; i++) {
        l[i] = [0,0,0];
        g[i] = [0,0,0];
        
    }
    for (i=1; i<n; i++) {
        diff = prices[i] - prices[i-1];
        for (j=1; j<=2; j++) {
            l[i][j] = Math.max(g[i-1][j-1]+Math.max(diff,0),l[i-1][j]+diff);
            g[i][j] = Math.max(l[i][j],g[i-1][j]);
        }
    }
    return g[n-1][2];
};
