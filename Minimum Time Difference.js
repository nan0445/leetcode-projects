/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    var time = [];
    for (let i=0; i<timePoints.length; i++) {
        var temp = timePoints[i].split(":");
        time.push(parseInt(temp[0])*60+parseInt(temp[1]));
    }
    function sortNumber(a,b) {return a-b;}
    time.sort(sortNumber);
    var min = Number.MAX_VALUE;
    for (let i=0; i<timePoints.length; i++) {
        if (i===0) min = Math.min(min,1440-time[time.length-1]+time[0], time[time.length-1]-time[0]);
        else min = Math.min(min, 1440-time[i]+time[i-1], time[i]-time[i-1]);
    }
    return min;
};
