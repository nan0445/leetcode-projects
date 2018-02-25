/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    var dis = Math.abs(target[0])+Math.abs(target[1]);
    for (let i=0; i<ghosts.length; i++) {
        var temp = Math.abs(ghosts[i][0]-target[0])+Math.abs(ghosts[i][1]-target[1]);
        if (temp<=dis) return false;
    }
    return true;
};
