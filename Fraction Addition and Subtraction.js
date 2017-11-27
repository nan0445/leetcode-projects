/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    var f_numer = 0;
    var f_denom = 1;
    var temp = "";
    for (var i=0; i<=expression.length; i++) {
        if (i>0 && (expression[i]==="+"||expression[i]==="-"||i===expression.length)) {
            var x = temp.split('/');
            var numer = x[0]-0;
            var denom = x[1]-0;
            var p = GCD(f_denom, denom);
            var t_denom = f_denom*denom/p;
            var t_numer = f_numer*t_denom/f_denom+numer*t_denom/denom;
            temp="";
            f_numer = t_numer;
            f_denom = t_denom;
        }
        if (i<expression.length) temp+=expression[i];
    }
    if (f_numer===0) return "0/1";
    var pp = GCD(Math.abs(f_numer), Math.abs(f_denom));
    return f_numer/pp.toString()+"/"+f_denom/pp.toString();
    
    function GCD(x, y) {
        if (x===y) return x;
        if (x>y) return GCD(x-y, y);
        else  return GCD(x, y-x);
    }
};
