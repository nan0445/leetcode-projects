/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var temp = input.split("\n");
    var t = [];
    var c = 0;
    var res = 0;
    var max = 0;
    var flag = false;
    for (let i=0; i<temp.length; i++) {
        flag = false;
        var x = temp[i].split("\t");
        if (x[x.length-1].indexOf(".")!==-1) flag = true;
        if (x.length-1>c) {
            c = x.length-1;
            var m = x.pop().length;
            t.push(m+1);
            res += m+1;
        } else {
            t = t.slice(0,x.length-1);
            var m = x.pop().length;
            t.push(m+1);
            res = 0;
            for (let j=0; j<t.length; j++) res += t[j];
        }
        if (flag) max = res>max ? res : max;
    }
    return max>0 ? max-1 : 0;                       
};
