/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var temp = x ^ y;
    for (i=0; temp; i++) {
        temp = temp & (temp-1);
        
    }
    return i;
};
