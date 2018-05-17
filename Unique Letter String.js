/**
 * @param {string} S
 * @return {number}
 */
var uniqueLetterString = function(S) {
    var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var ind = new Array(26);
    var res = 0;
    var l = S.length;
    for (let i=0; i<x.length; i++) {
        ind[i] = [0];
        for (let j=0; j<l; j++) {
            if (S[j]===x[i]) ind[i].push(j+1);
        }
        ind[i].push(l+1);
        if (ind[i].length===2) continue;
        for (let p=1; p<ind[i].length-1; p++) {
            res += (ind[i][p]-ind[i][p-1])*(ind[i][p+1]-ind[i][p]);
        }
    }
    return res;
};
