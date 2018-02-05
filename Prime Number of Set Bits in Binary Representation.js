/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var temp = [2,3,5,7,11,13,17,19,23];
    var res = 0;
    for (let i=L; i<=R; i++) {
        var t = i.toString(2);
        var count = 0;
        for (let j=0; j<t.length; j++) {
            if (t[j]==="1") count++;
        }
        if (temp.indexOf(count)!==-1) res++;
    }
    return res;
};
