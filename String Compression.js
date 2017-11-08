/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length<=1) return chars.length;
    var count = 1;
    for (var i=1; i<chars.length; i++) {
        if (chars[i]===chars[i-1]) {
            count++;
            chars.splice(i,1);
            i--;
        }
        else {
            if (count>1) {
                var p = count.toString().split("");
                for (var j=0; j<p.length; j++) {
                    chars.splice(i,0,p[j]);
                    i++;
                }
            }
            count = 1;
        }
        
    }
    if (count>1) {
        var p = count.toString().split("");
        for (var j=0; j<p.length; j++) {
            chars.splice(i,0,p[j]);
            i++;
        }
    }
    return chars.length
};
