/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    let temp = [];
    let count = 0;
    for (var i=0; i<M.length; i++) {
        if (temp.indexOf(i)===-1) {
            temp.push(i);
            count++;
            helper(i,M);
        }
            
    }
    return count;
    
    function helper(i,M) {
        for (let j=0; j<M.length; j++) {
            if (M[j][i]===1 && temp.indexOf(j)===-1 && j!==i) {
                temp.push(j);
                helper(j,M);
            }
        }
        
    }
};
