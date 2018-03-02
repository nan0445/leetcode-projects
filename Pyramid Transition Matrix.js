/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    let flag = false;
    let map = {};
    for (let i=0; i<allowed.length; i++) {
        if (map[allowed[i][0]+allowed[i][1]]===undefined) map[allowed[i][0]+allowed[i][1]]=[allowed[i][2]];
        else map[allowed[i][0]+allowed[i][1]].push(allowed[i][2]);
    }
    let A = new Array(bottom.length);
    for (let i=0; i<A.length; i++) {
        A[i] = new Array(bottom.length-i).fill("");
    }
    A[0]=bottom.split("");
    helper(A,0,0);
    return flag;
    function helper(A,k,p) {
        if (k===A.length-1) {flag = true; return;}
        if (flag) return;
        if (p===A[k].length-1) helper(A, k+1, 0);
        if (map[A[k][p]+A[k][p+1]]===undefined) return;
        else {
            for (let i=0; i<map[A[k][p]+A[k][p+1]].length; i++) {
                A[k+1][p] = map[A[k][p]+A[k][p+1]][i];
                helper(A,k,p+1);
                A[k+1][p] = "";
            }
        }
    }
};
