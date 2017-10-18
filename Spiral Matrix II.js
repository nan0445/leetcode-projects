/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n<1) return [];
    var res = new Array(n);
    for (i=0; i<n; i++) {
        res[i] = new Array(n);
        for (j=0; j<n; j++) res[i][j] = 0;
    }
    var r1=0, r2=n-1;
    var c1=0, c2=n-1;
    var count = 1;
    while (r1<=r2 && c1<=c2) {
        for (c=c1; c<=c2; c++) {res[r1][c] = count; count++;}
        for (r=r1+1; r<=r2; r++) {res[r][c2] = count; count++;}
        if (r1<r2 && c1<c2) {
            for (c=c2-1; c>=c1+1; c--) {res[r2][c] = count; count++;}
            for (r=r2; r>=r1+1; r--) {res[r][c1] = count; count++;}
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return res;
};
