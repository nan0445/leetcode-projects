/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    if (n===1) return 0;
    var p = 0;
    while (n!==1) {
        if (n%2===0) n=n/2;
        else {
            var temp1 = n+1;
            var temp2 = n-1;
            var p1 = 0, p2 = 0;
            while (temp1%2===0) {
                temp1 /= 2;
                p1++;
            }
            while (temp2%2===0) {
                temp2 /= 2;
                p2++;
            }
            n = p1>p2 && n!==3 ? n+1 : n-1;
        }
        p++;
    }
    return p;
};
