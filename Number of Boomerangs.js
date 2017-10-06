/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var sum = 0;
    for (i=0; i<points.length; i++) {
        var map = {};
        for (j=0; j<points.length; j++) {
            if (j !== i) {
                var temp = Math.pow((points[i][0]-points[j][0]), 2) + Math.pow((points[i][1]-points[j][1]), 2);
            
                if (map[temp] === undefined) map[temp] = 1;
                else {
                    map[temp]++;
                    sum += (map[temp]-1)*2;
                }
            }
            
        }
        
    }
    
    return sum;
};
