/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = 0;
    while (n !== 0) {
        sum += (n % 10) * (n % 10);
        n = Math.floor(n/10);
    }
    if (sum < 10) {
        if (sum === 1 || sum === 7) return true;
        else return false;
    }
    return isHappy(sum);
};
