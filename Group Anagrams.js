/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    var result = [];
    var k = 0;
    for (i=0; i<strs.length; i++) {
        var temp = strs[i].split('').sort();
        if (map[temp] === undefined) {
            result[k] = [];
            result[k].push(strs[i]);
            map[temp] = k;
            k++;
        } else {
            result[map[temp]].push(strs[i]);
        }
    }
    return result;
};
