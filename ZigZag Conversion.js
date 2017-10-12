/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
        
    if (s.length<=1 || numRows === 1) return s;
    var count = 0;
    var arr = [];
    for (i=0; i<numRows; i++) arr.push("");
    while (count < s.length) {
        var temp = count % (numRows*2-2);
        if (temp < numRows) arr[temp] += s[count];
        else if (temp>=numRows) arr[2*numRows-temp-2] += s[count];
        count++
    } 
    return arr.join('');
};
