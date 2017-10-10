/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    
    if (n===1) return 9;
    if (n%2===0) {
        var sum = 0;
        for(j=0; j<n/2; j++) sum = (sum + 9*Math.pow(10,j)) % 1337;
        for (j=2*n-1; j>=3*n/2; j--) sum = (sum + 9*Math.pow(10,j)) % 1337;
        return sum;
    }
    var upper = Math.pow(10, n)-1;
    var lower = Math.floor(upper/10)+1;
    var maxpali = upper*upper;
    var firsthalf = Math.floor(maxpali/Math.pow(10,n));
    var flag = false;
    while (flag === false) {
        var temp = generate(firsthalf);
        for (i=upper; i>=lower; i--) {
            
            if (temp>i*i || temp>maxpali) break;
            if (temp % i === 0) {
                flag = true;
                break;
            }
                    
        }
        firsthalf--;
    }
   
    return temp % 1337;
    
    function generate(firsthalf) {
        var tt = firsthalf.toString();
        return parseInt(tt.concat(tt.split('').reverse().join('')));
    }
    
};
