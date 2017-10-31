/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num===1 || num===4) return true;
    var l = 2, r = Math.floor(num/2);
    while (l<r) {
        var mid = l + Math.floor((r-l)/2);
        if (mid*mid===num) return true;
        else if (mid*mid<num) l=mid+1;
        else r=mid;
    }
    if (l*l===num) return true;
    else return false;
};
