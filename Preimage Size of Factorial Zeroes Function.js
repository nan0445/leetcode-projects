/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function(K) {
    if (K===0) return 5;
    //if (K===5) return 0;
    var temp = 0;
    var i=0;
    while (temp<K) {
        temp += Math.pow(5,i);
        i++;
    }
    if (temp===K) return 5;
    var temp2 = temp - Math.pow(5, i-1);
    var m = 0;
    var a = K;
    var b = a % temp2;
    m = Math.floor(a/temp2);
    a = b;
    
    i--;
    temp2 = temp2 - Math.pow(5,i-1);
    while (i>=2 && b!==0) {
        b = a % temp2;
        m = Math.floor(a/temp2);
        a = b;
        i--;
        temp2 = temp2 - Math.pow(5, i-1);
    }
    if (m===5) return 0;
    return 5;
};
