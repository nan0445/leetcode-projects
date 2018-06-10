/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    var max = 0;
    var flag = true;
    var count = 0;
    var p1 = 0;
    var p2 = 0;
    for (let i=0; i<seats.length; i++) {
        if (seats[i]===1) {
            if (flag && seats[0]===0) {
                p1 = i;
                flag = false;
            }
            count = 0;
        } else {
            
            count++;
        }
        if (count>max) {
            max = count;
        }
        if (seats[seats.length-1]===0) p2 = count;
    }
    if (max%2===0) max = max/2;
    else max = Math.floor(max/2)+1;
    return Math.max(p1,p2,max);
};
