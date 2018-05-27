/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    if (S.length<3) return [];
    var temp = [];
    let flag = false;
    for (let i=0; i<S.length/3; i++) {
        for (let j=i+1; j<i+1+S.length/3; j++) {
            temp = [];
            temp.push(parseInt(S.slice(0,i+1)));
            flag = false;
            if (helper(S.slice(0,i+1), S.slice(i+1,j+1), j)) return temp;
        }
    }
    return [];
    
    function helper(A, B, q) {
        if (flag) return true;
        
        if (A[0]==="0" && A.length>1) return false;
        if (B[0]==="0" && B.length>1) return false;
        var C = parseInt(A) + parseInt(B);
        var D=C.toString();
        if (D!==S.slice(q+1, q+1+D.length)) return false;
        temp.push(parseInt(B));
        if (A>Math.pow(2,31)-1 || B>Math.pow(2,31)-1) {flag = false; return false;}
        if (q+1+D.length===S.length && C<=Math.pow(2,31)-1) {temp.push(parseInt(D)); flag = true; return true;}
        helper(B, D, q+D.length);
        if (flag) return true;
    }
};
