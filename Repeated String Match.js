/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var count = 1;
    var temp = A;
    while (A.length<=B.length) {
        if (A.indexOf(B) !== -1) return count;
        A = A.concat(temp);
        count++;
    }
    if (A.indexOf(B) !== -1) return count;
    else if (A.concat(temp).indexOf(B) !== -1) return ++count;
    else return -1;
};
