/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var n = Math.max(a.length, b.length);
    a = "0".repeat(n-a.length) + a;
    b = "0".repeat(n-b.length) + b;
    var carry = 0;
    var temp = 0;
    var c = "";
    for (i=n-1; i>=0; i--) {
        temp = parseInt(a[i]) + parseInt(b[i]) + carry;
        switch (temp) {
            case 0:
                c = "0" + c;
                carry = 0;
                break;
            case 1:
                c = "1" + c;
                carry = 0;
                break;
            case 2:
                c = "0" + c;
                carry = 1;
                break;
            case 3:
                c = "1" + c;
                carry = 1;
                break;
        }
    }
    if (carry === 1) {
        return "1" + c;
    } 
    return c;
};
