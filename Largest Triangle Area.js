/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    function helper(A,B,C) {
        return 0.5*Math.abs((B[0]-A[0])*(C[1]-A[1])-(C[0]-A[0])*(B[1]-A[1]));
    }
    var max = 0;
    for (let i=0; i<points.length-2; i++) {
        for (let j=i+1; j<points.length-1; j++) {
            for (let k=j+1; k<points.length; k++) {
                var temp = helper(points[i], points[j], points[k]);
                max = temp>max ? temp : max;
            }
        }
    }
    return max; //helper(points[0], points[3], points[4]);
};
