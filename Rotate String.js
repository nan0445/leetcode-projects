/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A.length!==B.length) return false;
    if (A===B) return true;
    for (let i=0; i<A.length-1; i++) {
        var temp = A[0];
        A = A.slice(1)+temp;
        if (A===B) return true;
    }
    return false;
};
