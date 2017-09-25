/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (s.length <= 1) return s;
    var i=0;
    var result=[];
    
    while (i<s.length) {
        var j=0;
        var temp=[];
        while (j<k && i<s.length) {
            temp.push(s[i]);
            j++;
            i++;
        }
        if ((i-1)%(2*k) < k) {result = result.concat(temp.reverse());}
        else {result = result.concat(temp);}
        
    }
    return result.join('');
    
};
