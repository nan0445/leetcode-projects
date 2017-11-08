/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    var map = {};
    var first = [];
    for (var i=0; i<intervals.length; i++) {
        map[intervals[i].start]=i;
        first.push(intervals[i].start);
    }
    function sortNumber(a,b) {return a-b;}
    first.sort(sortNumber);
    var res = [];
    for (i=0; i<intervals.length; i++) {
        res.push(helper(intervals[i].end, first, map));
    }
    return res;
    
    function helper(p, first, map) {
        if (p>first[first.length-1]) return -1;
        else if (p<=first[0]) return map[first[0]];
        else if (map[p]!==undefined) return map[p];
        else {
            var r=0, l=first.length-1;
            while (r<l) {
                var mid = r+Math.floor((l-r)/2);
                if (first[mid]<p) r=mid+1;
                else l=mid;
            }
            return map[first[r]];
        }
    }
};
