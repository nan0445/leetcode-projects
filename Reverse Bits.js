/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var temp = n.toString(2);
    var result = 0;
    var idx = 31;
    for (i=temp.length-1; i>=0; i--) {
        result += (temp[i] - 0)*Math.pow(2,idx);
        idx--;
    }
    return result;
};
