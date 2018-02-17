/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var map = {};
    for (let i=0; i<S.length; i++) {
        if (map[S[i]]===undefined) map[S[i]]=[i,i];
        else {
            var temp=[map[S[i]][0],i];
            for (let j=map[S[i]][0]; j<=i; j++) {
                map[S[j]]=temp;
            }
        }
    }
    var res = [];
    res.push(map[S[0]][1]-map[S[0]][0]+1);
    for (let i=1; i<S.length; i++) {
        if (map[S[i]].join("")!==map[S[i-1]].join("")) res.push(map[S[i]][1]-map[S[i]][0]+1);
    }
    return res;
};
