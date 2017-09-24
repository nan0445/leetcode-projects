/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var temp = s.split('');
    temp = temp.reverse();
    return temp.join('');
};
