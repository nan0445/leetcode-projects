/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var temp = num.toString(2);
    var result = [];
    for (i=0; i<temp.length; i++) {
        result[i] = 1 - (temp[i] - 0);
    }
    result = parseInt(result.join(''),2);
    return result;
};
