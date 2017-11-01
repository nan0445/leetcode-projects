/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length<1) return 0;
    function sortNumber(a, b){
        if (a[0]===b[0]) return a[1]-b[1];
        else return a[0]-b[0];
    }
    points.sort(sortNumber);
    var lim = points[0][1];
    var arr = 1;
    for (i=0; i<points.length; i++) {
        if (points[i][0]<=lim) lim = Math.min(lim, points[i][1]);
        else {arr++; lim=points[i][1];}
    }
    return arr;
};
