/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (z>x+y) return false;
    if (z===x || z===y || z===x+y) return true;
    function GCD(x,y) {
        while(y!==0) {
            var temp = y;
            y = x % y;
            x = temp;
        }
        return x
    }
    return z % GCD(x,y) === 0;
};
