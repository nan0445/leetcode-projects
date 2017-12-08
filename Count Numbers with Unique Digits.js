/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n===0) return 1;
    if (n===1) return 10;
    var res = 10;
    var temp = 9;
    for (var i=2; i<=n; i++) {
        temp *= (10-(i-1));
        res += temp;
    }
    return res;
};
