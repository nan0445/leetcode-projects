/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    a = a.split("+");
    b = b.split("+");
    var a1 = a[0]-0, a2 = b[0]-0;
    var b1 = a[1].slice(0,a[1].length-1)-0, b2 = b[1].slice(0,b[1].length-1)-0;
    var a0 = a1*a2-b1*b2;
    var b0 = a1*b2+a2*b1;
    return a0.toString()+"+"+b0.toString()+"i";
};
