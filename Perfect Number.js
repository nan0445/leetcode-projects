/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num<=2) return false;
    var n = Math.sqrt(num);
    var sum = 1;
    for (i=2; i<=n; i++) {
        if (num % i === 0) {
            sum += num/i;
            sum += i;
        }
    }
    if (sum===num) return true;
    else return false;
};
