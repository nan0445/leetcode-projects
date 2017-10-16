/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    
    if (n<1) return 0;
    else if (n<=3) return 1;
    var count = 1;
    var str = [];
    str.push(1);
    str.push(2);
    str.push(2);
    var i = 3;
    var j = 2;
    while (i<n) {
        j++;
        
        for (k=1; k<=str[j-1]; k++) {
            if (str[i-1] === 1) str.push(2);
            else {str.push(1); count++}
        }
        i += k-1;
    }
    
    if (i === n) return count;
    else if (i === n+1) {
        if (str[i-1]===1) return count-1;
        else return count;
    }
};
