/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
    var res = "";
    var start = 0;
    var map1 = {}, map2 = {};
    for (let i=0; i<indexes.length; i++) {
        map1[indexes[i]]=sources[i];
        map2[indexes[i]] = targets[i];
    }
    function sortNumber(a,b) {return a-b;}
    indexes.sort(sortNumber);
    for (let i=0; i<indexes.length; i++) {
        var l = map1[indexes[i]].length;
        res += S.slice(start,indexes[i]);
        if (S.slice(indexes[i],indexes[i]+l)===map1[indexes[i]]) {
            res += map2[indexes[i]];
            start = indexes[i]+l;
        } else {
            start = indexes[i];
        }
    }
    res += S.slice(start,S.length);
    return res;
};
