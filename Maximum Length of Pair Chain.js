/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
    function sortNumber(a, b) {
        return a[1]-b[1];
    }
    pairs.sort(sortNumber);
    var dp = new Array(pairs.length).fill(1);
    var max = 1;
    for (var i=0; i<pairs.length; i++) {
        var temp = dp[i];
        for (var j=0; j<i; j++) {
            if (pairs[j][1]>=pairs[i][0]) break;
            dp[i] = Math.max(dp[i], temp+dp[j]);
            max = Math.max(max, dp[i]);
        }
    }
    return max;
};

/////////////////////////////////////////////////////
/// actually, when sort with the second number of each pair////
/// we should use one-time-sort after this///////

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let answer = 0
    let end = -Infinity
    pairs.sort((a, b) => { return a[1] - b[1] })
    pairs.forEach((pair) => {
        if (pair[0] > end) {
            end = pair[1]
            answer ++
        }
    })
    return answer
};
