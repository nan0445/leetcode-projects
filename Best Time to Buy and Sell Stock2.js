/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var buy = prices[0];
    var profit = 0;
    for (i=1; i<prices.length; i++) {
        if (prices[i]<buy) buy = prices[i];
        if (prices[i]>buy) {
            profit += prices[i]-buy;
            buy = prices[i];
        }
    }
    return profit;
};
