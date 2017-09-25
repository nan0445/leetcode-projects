/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    while (num>=10) {
        var sum = 0;
        sum += (num%10);
        num = Math.floor(num/10);
        sum += num;
        num = sum;
    }
    return num;
};
