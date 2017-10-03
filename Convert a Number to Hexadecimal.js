/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    var c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    if (num===0) return "0";
    var result = '';
    while (num !== 0) {
        result = c[num&15] + result;
        num >>>= 4;
    }
    return result;
};
