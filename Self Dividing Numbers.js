/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res = [];
    for (var i=left; i<=right; i++) {
        var temp = i.toString().split("");
        for (var j=0; j<temp.length; j++) {
            if (temp[j]==="0" || i % (temp[j]-0) !==0) break;
        }
        if (j===temp.length) res.push(i);
    }
    return res;
};
