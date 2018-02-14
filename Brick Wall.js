/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    var h = wall.length;
    var map = {};
    var sum = 0;
    var tt = new Array(h);
    for (let i=0; i<h; i++) {
        sum = 0;
        tt[i] = new Array(wall[i].length);
        for (let j=0; j<wall[i].length; j++) {
            sum+=wall[i][j];
            tt[i][j] = sum;
        }
    }
    var count = 0;
    var res = h;
    for (let i=0; i<h; i++) {
        for (let j=0; j<tt[i].length-1; j++) {
            count = 0;
            if (map[tt[i][j]]===undefined) {
                for (let k=0; k<h; k++) {
                    if (k===i) continue;
                    if (tt[k].indexOf(tt[i][j])===-1) count++;
                }
                map[tt[i][j]] = count;
                res = Math.min(res,map[tt[i][j]]);
            }
        }
    }
    return res;
};

//////////////////////////////////////////
/// very slow/////////////////////////////
///try below//////////////////////////////

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    var h = wall.length;
    var map = {};
    var sum = 0;
    var tt = new Array(h);
    var res = 0;
    for (let i=0; i<h; i++) {
        sum = 0;
        for (let j=0; j<wall[i].length-1; j++) {
            sum+=wall[i][j];
            if (map[sum]===undefined) map[sum]=1;
            else{
                map[sum]++;
            }
            res = Math.max(res,map[sum]);
        }
    }
    return h-res;
};
