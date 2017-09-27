/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    var i=num1.length-1;
    var j=num2.length-1;
    var result = '';
    var carry = 0;
    while (i>=0||j>=0) {
        var x = i<0 ? 0 : num1[i]-'0';
        var y = j<0 ? 0 : num2[j]-'0';
        result = result.concat((x+y+carry)%10);
        carry = Math.floor((x+y+carry)/10);
        i--;
        j--;
    }
    if (carry===1) result = result.concat('1');
    return result.split('').reverse().join('');
};
