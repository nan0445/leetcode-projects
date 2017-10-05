/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    s=s.trim();
    if (s === "") return 0;
    s = s.split(' ');
    var count = 0;
    for (i=0; i<s.length; i++) {
        if (s[i] !== "") count++;
    }
    return count;
};
