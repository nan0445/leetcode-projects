/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x===1) return 1;
    if (x===-1 && n%2===1) return -1;
    if (x===-1 && n%2===0) return 1;
    if (n===0) return 1;
    if (x===0) return 0;
    var res = 1;
    var temp = Math.abs(n);
    while (temp>0) {
        if (res>=Number.MAX_VALUE || res<=Number.MIN_VALUE) break;
        res *= Math.abs(x);
        temp--;
    }
    if (x<0 && n%2 ===1) res = -1*res;
    if (n>0) return res;
    else return 1/res;
    
};
