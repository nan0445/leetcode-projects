/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length===0) return 0;
    var t = duration;
    var tt = timeSeries[0] + duration - 1;
    for (var i=1; i<timeSeries.length; i++) {
        if (timeSeries[i]<=tt) {
            t += timeSeries[i]-timeSeries[i-1];
        } else t += duration;
        tt = timeSeries[i] + duration - 1;
    }
    return t;
};
