/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var A=[];
    A[0]=0;
    for (i=1; i<=amount; i++) {
        var k = 0;
        A[i]=Number.MAX_VALUE;
        for (j=0; j<coins.length; j++) {
            if (coins[j]<=i) {
                A[i]=Math.min(A[i], A[i-coins[j]]+1);    
            }
        }
    }
    return A[amount]===Number.MAX_VALUE ? -1 : A[amount];
};
