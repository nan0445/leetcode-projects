/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    var R = [], L = [];
    for (let i=0; i<start.length; i++) {
        if (start[i]==="R") {
            if (i+1<start.length && start[i+1]==="L" && end[i]!=="R") return false;
            R.push("R");
        }
        if (end[i]==="R") {
            if (R.length===0) return false;
            if (L.length!==0) return false;
            else R.pop();
        }
        if (end[i]==="L") {
            if (R.length!==0) return false;
            L.push("L");
        }
        if (start[i]==="L") {
            if (L.length===0) return false;
            if (i-1>=0 && start[i-1]==="R" && end[i]!=="L") return false;
            else L.pop();
        }
    }
    return R.length===0 && L.length===0;
};
