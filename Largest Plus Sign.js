/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
    var M = new Array(N);
    for (let i=0; i<N; i++) M[i] = new Array(N).fill(1);
    for (let i=0; i<mines.length; i++) M[mines[i][0]][mines[i][1]]=0;
    var k = Math.floor((N+1)/2);
    var flag = true;
    for (let i=k; i>=1; i--) {
        for (let j=i-1; j<=N-i; j++) {
            for (let p=i-1; p<=N-i; p++) {
                flag = true;
                if (M[j][p]===0) continue;
                for (let x=p+1; x<=p+i-1; x++) if (M[j][x]===0) {flag = false; break;}
                if (!flag) continue;
                for (let x=p-1; x>=p-i+1; x--) if (M[j][x]===0) {flag = false; break;}
                if (!flag) continue;
                for (let y=j+1; y<=j+i-1; y++) if (M[y][p]===0) {flag = false; break;}
                if (!flag) continue;
                for (let y=j-1; y>=j-i+1; y--) if (M[y][p]===0) {flag = false; break;}
                if (!flag) continue;
                return i;
            }
        }
    }
    return 0;
};
