/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var nn = function (x) {
        if (x<2) {return 1;}
        return x*nn(x-1);
    }
    
    var evenstep = Math.floor(n/2);
    var oddstep = n % 2;
    var ways = 0;
    var steps = evenstep;
    var temp_odd = oddstep;
    
    for (i=0; i<= steps; i++) {
        evenstep = steps - i;
        oddstep = temp_odd + 2*i;
        ways += nn(evenstep+oddstep)/(nn(evenstep)*nn(oddstep));
        
    }
    return ways;
};
