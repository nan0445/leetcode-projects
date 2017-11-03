/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    var l=num.length;
    for (i=1; i<=(l-1)/2; i++){
        if (num[0]==="0" && i>=2) break;
        for (j=i+1; j-i<=l-j && i<=l-j; j++) {
            if (num[i]==="0" && j-i>=2) break;
            var n1 = parseInt(num.substring(0,i));
            var n2 = parseInt(num.substring(i,j));
            var p = helper(num.substring(j), n1, n2)
            if (helper(num.substring(j), n1, n2)) return true;
        }
    }
    return false;
    
    function helper(str, n1, n2) {
        if (str==="") return true;
        var sum = n1+n2;
        var s = sum.toString();
        if (str.substring(0,s.length)!==s) return false;
        return helper(str.substring(s.length), n2, sum);
    }
};
