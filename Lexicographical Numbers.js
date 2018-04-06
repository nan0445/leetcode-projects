/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    if (n<=0) return [];
    var res = [];
    var temp = 1;
    res.push(temp);
    for (let i=2; i<=n; i++) {
        if (temp*10<=n) temp *= 10;
        else {
            temp++;
            if (temp>n) temp = Math.floor((temp-1)/10)+1;
            while (temp%10===0) temp /= 10;
        }
        res.push(temp);
    }
    return res;
};
