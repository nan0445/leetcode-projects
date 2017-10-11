/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    
    var n = intervals.length;
    if (n<=1) return intervals;
    var first = [];
    var map = {};
    for (i=0; i<n; i++) {
        first.push(intervals[i].start);
        if (map[intervals[i].start] === undefined) map[intervals[i].start]= intervals[i].end;
        else map[intervals[i].start] = intervals[i].end > map[intervals[i].start] ? intervals[i].end : map[intervals[i].start];
    }
    function sortNumber(a,b) {return a-b;}
    first.sort(sortNumber);
    var result = [];
    var temp = new Interval(first[0], map[first[0]]);
    result.push(temp);
    for (i=1; i<n; i++) {
        if (first[i] <= result[result.length-1].end) result[result.length-1].end = result[result.length-1].end>=map[first[i]] ? result[result.length-1].end : map[first[i]];
        else {
            var temp = new Interval(first[i], map[first[i]]);
            result.push(temp);
        }
    }
    return result;
};


/////////////////////////////
///// below is very concise but the same idea //////////
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    
    let result = [],
        prev = null;
    
    for (let i of intervals) {
        if (prev === null || i.start > prev.end) {
            result.push(i);
            prev = i;
        } else if (i.end > prev.end) {
            prev.end = i.end;
        }
    }
    return result;
};
