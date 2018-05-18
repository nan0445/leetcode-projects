/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
    if (A.length===0) return 0;
    var max = 0;
    var h = A.length-1, w = A[0].length-1;
    var temp = 0;
    for (let i=-h; i<=h; i++) {
        for (let j=-w; j<=w; j++) {
            temp = 0;
            var x0 = 0>=i ? 0 : i;
            var x1 = h<=i+h ? h : i+h;
            var y0 = 0>=j ? 0 : j;
            var y1 = w<=j+w ? w : j+w;
            var p = i<0 ? -i : 0;
            var q = j<0 ? -j : 0;
            for (let x=x0; x<=x1; x++) {
                for (let y=y0; y<=y1; y++) {
                    if (B[x][y] === A[p+x-x0][q+y-y0] && B[x][y] ===1) temp++;
                }
            }
            max = temp>max ? temp : max;
        }
    }
    return max;
};
