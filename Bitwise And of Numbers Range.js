/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var result = m;
    if (n>=m*2) return 0;
    for (i=m; i<=n; i++) {
        result &= i;
        if (result===0) return 0;
    }
    return result;
};

/////////////////////////////////////////////////
////////// I do not understand the below ones////

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    //special case
    if(m === n){
        return m;
    }
    
    let mask = 2147483647;
    while((mask & m) !== (mask & n))
    {
        mask <<= 1;
    }
        
    return (mask & m);
};

//////////////////////////////////////////////////

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
   while (m < n)
    n = n & (n - 1);
  return n;
};
