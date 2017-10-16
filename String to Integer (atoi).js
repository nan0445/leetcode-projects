/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var base = 0;
    var pool = "0123456789";
    var sign = 1;
    str = str.trim();
    for (var i=0; i<str.length; i++) {
        if (i===0) {
            if (str[i] === "-") sign = -1;
            else if (str[i] === "+") sign = 1;
            else if (pool.indexOf(str[i]) !== -1) base=base*10+(str[i]-0);
            else break;
        }
        else {
            if (pool.indexOf(str[i]) !== -1) base=base*10+(str[i]-0);
            else break;
        }
    }
    if (base*sign>2147483647) return 2147483647;
    else if (base*sign<-2147483648) return -2147483648;
    else return base*sign;
};
