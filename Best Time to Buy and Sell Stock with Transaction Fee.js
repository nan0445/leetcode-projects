/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    if (prices.length<=1) return 0;
    var buy = prices[0], sell = prices[0];
    var res = 0;
    for (let i=1; i<prices.length; i++) {
        if (prices[i]>prices[i-1]) {
            if (prices[i]>sell) sell = prices[i];
        }
        if (prices[i]<prices[i-1]) {
            if (buy===sell || buy>prices[i]) {
                if ((sell-buy)>fee) res += sell-buy-fee;
                buy = prices[i];
                sell = prices[i];
            }
            if ((sell - prices[i]) > fee) {
                if ((sell-buy)>fee) res += sell-buy-fee;
                buy = prices[i];
                sell = prices[i];
            }
        }
    }
    if ((sell-buy)>fee) res+=sell-buy-fee;
    return res;
};
