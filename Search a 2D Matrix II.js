////////////////
///very smart solution///////

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    if (!m) {
        return false;
    }
    var n = matrix[0].length;
    var i = 0, j = n - 1;
    while(i < m && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] < target) {
            i ++;
        } else if(matrix[i][j] > target) {
            j --;
        }
    }
    return false;
};

///////////////////////////////////////
//below is my stupid solution/////////

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
   
    if (matrix.length<1) return false;
    var m = matrix.length;
    var n = matrix[0].length;
    if (target<matrix[0][0] || target>matrix[m-1][n-1]) return false;
    var l = 0, r = Math.min(n-1, m-1);
    var x = Math.abs(m-n);
    if (m>=n) {
        while (l<=r) {
            var mid = Math.floor((l+r)/2);
            if (matrix[x+mid][mid] === target) return true;
            else if (matrix[x+mid][mid] < target) l = mid + 1;
            else r = mid - 1;
            
        }
    } else {
        while (l<=r) {
            var mid = Math.floor((l+r)/2);
            if (matrix[mid][x+mid] === target) return true;
            else if (matrix[mid][x+mid] < target) l = mid + 1;
            else r = mid - 1;
            
        }
    }
       
    r=l-1;
    l=0;
    for (i=0;i<=x+r; i++) {
        for (j=r+1; j<Math.min(n,m); j++) {
            if (m>=n && matrix[i][j]===target) return true;
            if (m<n && matrix[j][i]===target) return true;
        }
    }
    for (i=0;i<=r; i++) {
        for (j=x+r+1; j<Math.max(m,n); j++) {
            if (m<n && matrix[i][j]===target) return true;
            if (m>=n && matrix[j][i]===target) return true;
        }
        
    }
    return false;
};
