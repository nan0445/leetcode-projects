/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    var result = [];
    var temp1 = '', temp2 = '';
    for (i=1; i<=n; i++) {
        if (i%3 === 0) temp1 = 'Fizz';
        else temp1 = '';
        if (i%5 === 0) temp2 = 'Buzz';
        else temp2 = '';
        var temp = temp1+temp2;
        if (temp !== '') result.push(temp);
        else result.push(i.toString());
    }
    return result;
};
