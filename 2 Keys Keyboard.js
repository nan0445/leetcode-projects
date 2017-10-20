/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    
    var res = 0;
    var i = 1;
    while (i<=Math.floor(Math.sqrt(n))) {
        i++;
        if (n%i===0) {
            res += i;
            n=n/i;
            i=1;
        }
        
    }
    
    return n===1? res : res+n;
};
