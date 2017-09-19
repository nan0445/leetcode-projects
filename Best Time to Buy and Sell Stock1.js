/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <=1) return 0;
    var maxprofit = 0;
    var minprice = prices[0];
    for (i=1; i<prices.length; i++) {
        if (prices[i]<minprice) {
            minprice = prices[i];
        }
        if ((prices[i] - minprice) > maxprofit) maxprofit = prices[i] - minprice;
    }
    return maxprofit;   
};
