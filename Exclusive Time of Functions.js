/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    var res = new Array(n).fill(0);
    var last = logs[0].split(":");
    var idx = [];
    idx[0]=0;
    for (var i=1; i<logs.length; i++) {
        var temp = logs[i].split(":");
        var cur = parseInt(temp[2])-parseInt(last[2]);
        if (temp[1]==="start") {
            res[idx[idx.length-1]]+= last[1] === "end" ? cur-1 : cur;
            idx.push(parseInt(temp[0]));
        } else if (temp[1] === "end") {
            res[idx[idx.length-1]]+= last[1] === "start" ? cur+1 : cur;
            idx.pop();
        }
        last = temp;
    }
    return res;
};
