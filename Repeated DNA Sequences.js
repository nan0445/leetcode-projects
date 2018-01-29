/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var res = [];
    var map = {};
    for (let i=0; i<s.length-9; i++) {
        var temp = s.slice(i, i+10);
        if (map[temp]===undefined) map[temp]=1;
        else {
            map[temp]++;
            if (map[temp]<=2) res.push(temp);
        }
        
    }
    return res;
};
