/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    function sortNumber(a,b) {
        return a - b
    }
    
    g.sort(sortNumber);
    s.sort(sortNumber);
    var count = 0;
    while (g) {
        for (i=0; i<s.length; i++) {
            if (s[i]>=g[0]) {
                count++;
                g.splice(0,1)
            }
        }
        break;
    }
    return count;
    
};
