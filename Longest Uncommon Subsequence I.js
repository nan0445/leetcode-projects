/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    var l1 = a.length;
    var l2 = b.length;
    if (l1 === 0 && l2 === 0) return -1;
    if (l1 !== l2) return Math.max(l1, l2);
    
    if (b.indexOf(a) !== -1) return -1;
        else return l2;
    
    
};


///// OR //////////
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a == b){
        return -1; 
    } else {
        return Math.max(a.length, b.length); 
    }
};
