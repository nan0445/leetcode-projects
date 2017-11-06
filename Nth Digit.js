/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var i=1;
    while (n>=i*9*Math.pow(10,(i-1))) {
        n-=i*9*Math.pow(10,(i-1));
        i++;
    }
    var carr = n%i===0 ? 0 : 1;
    var fin = Math.floor(n/i)-1+Math.pow(10,(i-1))+carr;
    fin = fin.toString();
    return carr===0 ? fin[fin.length-1]-0 : fin[n%i-1]-0; 
};
