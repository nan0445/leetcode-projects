/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [0];
    var temp = [0];
    var n = 1;
    var j=0;
    for (let i=0; i<num; i++) {
        if (res.length===2*n) {
            n = res.length;
            j = 0;
            temp = res.slice();
        }
        res.push(temp[j]+1);
        j++;
    }
    return res;
};
