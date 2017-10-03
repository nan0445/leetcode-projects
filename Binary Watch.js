/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    
    var result = [];
    for (i=0; i<12; i++) {
        for (j=0; j<60; j++) {
            if ((bitcount(i)+bitcount(j)) === num) {
                result.push(i.toString()+":"+ (j<10?"0":"") + j.toString());
            }
        }
    }
    
    function bitcount(x) {
        for (k=0; x; k++) {
            x &= x-1;
        }
        return k;
    }
    
    return result;
};
