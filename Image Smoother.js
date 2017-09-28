/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    
    var x = M.length;
    var y = M[0].length;
    var temp = 0;
    var count = 0;
    var result = [];
    for (i=0; i<x; i++) {
        var N = [];
        for (j=0; j<y; j++) {
            temp = 0;
            count = 0;
            for (k=i-1; k<=i+1; k++) {
                for  (l=j-1; l<=j+1; l++) {
                    if (k>=0 && k<x && l>=0 && l<y) {temp += M[k][l];count++;}
                    
                }
            }
            
            N.push(Math.floor(temp/count));
        }
        result.push(N);
    }
    
    return result;
    
};
