/**
 * @param {number[]} A
 * @return {number}
 */
var bestRotation = function(A) {
    var N = A.length;
    var bad = new Array(N).fill(0);
    for (let i = 0; i < N; ++i) {
        var left = (i - A[i] + 1 + N) % N;
        var right = (i + 1) % N;
        bad[left]--;
        bad[right]++;
        if (left > right) bad[0]--;
    }

        var best = -N;
        var ans = 0, cur = 0;
        for (let i = 0; i < N; ++i) {
            cur += bad[i];
            if (cur > best) {
                best = cur;
                ans = i;
            }
        }
    return ans;
    
};
