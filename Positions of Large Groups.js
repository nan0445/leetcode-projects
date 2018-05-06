/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var res = [];
    var count = 1;
    var temp = [];
    for (var i=1; i<S.length; i++) {
        if (S[i]===S[i-1]) count++;
        else {
            if (count>=3) {
                temp.push(i-count);
                temp.push(i-1);
                res.push(temp);
            }
            count = 1;
            temp = [];
        }
    }
    if (count>=3) {
        temp.push(i-count);
        temp.push(i-1);
        res.push(temp);
    }
    return res;
};
