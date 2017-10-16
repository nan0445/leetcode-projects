/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var set = new Array(4);
    set[0] = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    set[1] = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    set[2] = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    set[3] = ['', 'M', 'MM', 'MMM'];
    var str = "";
    var i = 0;
    while (num>0) {
        var temp = num%10;
        str = set[i][temp] + str;
        i++;
        num = Math.floor(num/10);
    }
    return str;
};
