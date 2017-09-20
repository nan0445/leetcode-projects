/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 0) return false;
    let binary = n.toString(2);
    let len = binary.match(/1/g);
    return len && len.length == 1 ? true : false;
};

// or !!!

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n<=0) return false;
    if (n<=2) return true;
    while (n>1) {
        if (n % 2 === 1) return false;
        n = n/2;
    }
    return true;
};
