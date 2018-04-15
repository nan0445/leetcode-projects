/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function(S) {
    //return parseFloat("00.2").toString()==="00.2"
    S = S.slice(1, S.length-1);
    let temp = [];
    var p = "";
    var map = {};
    var res = [];
    for (let i=0; i<S.length-1; i++) {
        var t1 = S.slice(0,i+1);
        var t2 = S.slice(i+1,S.length);
        for (let j=0; j<t1.length; j++) {
            for (let k=0; k<t2.length; k++) {
                temp=[];
                if (helper(t1, t2, j, k)) {
                    p = "(" + temp[0] + ", " + temp[1] +")";
                    if (map[p]===undefined) {
                        map[p] = 1;
                        res.push(p);
                    }
                }
            }
        }
    }
    return res;
    
    function helper(A, B, n, m) {
        if (n!==A.length-1) {
            var x = A.slice(0,n+1)+"."+A.slice(n+1,A.length);
        } else x = A;
        if (parseFloat(x).toString()!==x) return false;
        
        if (m!==B.length-1) {
            var y = B.slice(0,m+1)+"."+B.slice(m+1,B.length);
        } else y = B;
        if (parseFloat(y).toString()!==y) return false;
        temp.push(x);
        temp.push(y);
        return true;
    }
};
