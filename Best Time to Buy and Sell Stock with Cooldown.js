/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var stay = 0, sell = 0;
    for (let i=1; i<prices.length; i++) {
        var temp = sell;
        sell = Math.max(sell+prices[i]-prices[i-1], stay);
        stay = Math.max(stay, temp);
    }
    return Math.max(stay, sell);
};
