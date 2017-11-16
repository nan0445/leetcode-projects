/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num===0) return "0";
    var sig = num<0 ? -1:1;
    var res = "";
    num = Math.abs(num);
    while (num>0) {
        var temp = num % 7;
        res = temp + res;
        num = Math.floor(num/7);
    }
    return sig===-1 ? "-" + res : res;
};
