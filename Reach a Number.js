/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    var k = Math.ceil(Math.sqrt(0.25+2*target)-0.5);
    var sum = (1+k)*k/2;
    var delta = sum - target;
    if (delta%2===0) return k;
    if ((delta+k+1)%2===0) return k+1;
    else return k+2;
};
