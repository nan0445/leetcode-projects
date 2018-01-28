/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = "";
    while (n!==0) {
        var temp = n%26;
        if (temp===0) {res = "Z"+res; n -= 26;}
        else res = s[temp-1]+res;
        n = Math.floor(n/26);
    }
    return res;
};
