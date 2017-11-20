/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    d.sort();
    var res = "";
    for (var i=0; i<d.length; i++) {
        if (d[i].length>s.length) continue;
        if (check(s, d[i])) res = res.length>=d[i].length ? res : d[i];
    }
    return res;
    
    function check(s, p) {
        var x = 0;
        for (var j=0; j<s.length && x<p.length; j++) {
            if (s[j]===p[x]) x++;
        }
        return x===p.length ? true : false;
    }
};
