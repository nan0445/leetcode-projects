/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var m = s.length;
    var res = 0;
    for (let i=0; i<m; i++) {
        res += (p.indexOf(s[i])+1)*Math.pow(26,(m-i-1));
    }
    return res;
};
