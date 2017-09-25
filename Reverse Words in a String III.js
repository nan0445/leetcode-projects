/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var temp = s.split(' ');
    
    for (i=0; i<temp.length; i++) {
        var x = [];
        x=temp[i].split('');
        x=x.reverse();
        x=x.join('');
        temp[i]=x;
    }
    return temp.join(' ');
};
