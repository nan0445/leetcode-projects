/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    
    var sum = [];
    sum[0]=sum[1]=sum[2]=1;
    
    for (i=3; i<=n; i++) {
        var count = 2;
        sum[i]=i-1;
        while (i-count>=count) {
            sum[i]=Math.max(sum[i], sum[i-count]*sum[count], sum[i-count]*count, sum[count]*(i-count), count*(i-count));
            count++;
        }
    }
    return sum[n];
};
