/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var countA = 0;
    var countL = 0;
    for (i=0; i<s.length; i++) {
        if (s[i] === "A") countA++;
        if (s[i] === "L") countL++;
        if (s[i] !== "L") countL = 0;
        if (countA > 1 || countL > 2) return false;
        
    }
    return true;
};
