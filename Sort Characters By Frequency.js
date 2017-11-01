/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    if (s.length<1) return "";
    var map = {};
    for (i=0; i<s.length; i++) {
        if (map[s[i]]===undefined) map[s[i]]=1;
        else map[s[i]]++;
    }
    var idx = [];
    var c = [];
    for (i in map) {
        idx.push(map[i]);
        c.push(i);
    }
    function sortNumber(a,b) {return b-a;}
    var sort_idx = idx.slice();
    sort_idx.sort(sortNumber);
    var res = "";
    for (i=0; i<sort_idx.length; i++) {
        var p = idx.indexOf(sort_idx[i]);
        for (j=0; j<sort_idx[i]; j++) {
            res+=c[p];
        }
        c.splice(p,1);
        idx.splice(p,1);
    }
    return res;
};
