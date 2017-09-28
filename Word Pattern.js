/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var p1 = pattern.split('');
    var s1 = str.split(' ');
    if (p1.length !== s1.length) return false;
    var map1 = {};
    var map2 = {};
    for (i=0; i<p1.length; i++) {
        if (map1[p1[i]] !== map2[s1[i]]) return false;
        else {
            map1[p1[i]] = i;
            map2[s1[i]] = i;
        }
    }
    
    return true;
};
