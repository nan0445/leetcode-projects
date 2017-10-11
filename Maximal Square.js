/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
    if (matrix.length<1) return 0;
    var maxarea = 0;
    var h = matrix.length;
    var w = matrix[0].length;
    
    for (i=0; i<h; i++) {
        for (j=0; j<w; j++) {
            
            if (matrix[i][j] === "1") {
                var temp = j;
                while (temp+1<w && matrix[i][temp+1] === "1") temp++;
                var ttemp = i;
                while (ttemp+1<h && matrix[ttemp+1][j] === "1") ttemp++;
                var square_w = Math.min(temp-j+1, ttemp-i+1);
                var flag = true;
                while (flag && square_w>=1) {
                    for (k=i; k<=i+square_w-1; k++) {
                        for (p=j; p<=j+square_w-1; p++) {
                            if (matrix[k][p] === "0") break;
                        }
                        if (p<=j+square_w-1) break;
                    }
                    if (k>i+square_w-1) {maxarea = Math.max(maxarea, square_w*square_w); flag = false;}
                    square_w--;
                }
                
                
            }
        }
    }
    return maxarea;
};
