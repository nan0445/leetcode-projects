/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var n = Math.floor(Math.sqrt(c));
    var mid = Math.ceil(Math.sqrt(c/2));
    for (var i=0; i<=mid; i++) {
        for (var j=n; j>=mid; j--) {
            if (i*i+j*j===c) return true;
            else if (i*i+j*j<c) break;
        }
    }
    return false;
};
/////////////////////////////
/// below is much faster//////////////////

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var n = Math.floor(Math.sqrt(c));
    var l = 0;
    while (l<=n) {
        var temp = l*l + n*n;
        if (temp===c) return true;
        else if (temp<c) l++;
        else if (temp>c) n--;
    }
    return false;
};
