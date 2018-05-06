/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
    var temp = 0; 
    var res = 0;
    for(let i=2; i<=Math.sqrt(N)*2; i++) {
        if((N-i*(i-1)/2)%i===0) {  
            if (N-i*(i-1)/2 >0) res++;  
              
            
        }  
    } 
    return res+1;
};
