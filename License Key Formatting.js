/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.toUpperCase();
    var res = "";
    var count = 0;
    for (i=S.length-1; i>=0; i--) {
        if (count === K) {
            count = 0;
            res = "-"+res;
        }
        if (S[i]==="-") continue;
        else {
            count++;
            res = S[i]+res;
        }
    }
    if (res[0]==="-") res = res.slice(1);
    return res;
};
