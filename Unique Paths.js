/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
   
    var h = Math.max(m-1, n-1);
    var w = Math.min(n-1, m-1);
    var sum = m+n-2;
    if (sum === h) return 1;
    var p = sum - h;
    var temp = sum;
    for (i=1; i<p; i++) {
        sum *= temp-i;
        sum /= w-i+1;
    }
    
    return sum;
};

//////////////////////////////////////////
/// OR DP solution which I copied online///
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var arr = new Array(m);
    for(var i=0; i<m; i++){
        arr[i] = new Array(n);
    }
    
    for(var i = 0; i<m;i++){
        arr[i][0] = 1; 
    }
    for(var j= 0;j<n;j++){
        arr[0][j]=1;
    }
    
    for(var i=1; i<m; i++){
        for(var j=1; j<n; j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    return arr[i-1][j-1];
};
