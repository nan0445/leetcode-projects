/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    var map = {};
    var max = 0;
    var temp = "";
    var res = [];
    for (let i=0; i<S.length; i++) {
        if (map[S[i]]===undefined) {
            map[S[i]] = 1;
            res.push(S[i]);
        }
        else map[S[i]]++;
        max = max<map[S[i]] ? map[S[i]] : max;
        temp = max<=map[S[i]] ? S[i] : temp;
    }
    if (max>Math.ceil(S.length/2)) return "";
    var l = new Array(max);
    for (let i=0; i<max; i++) l[i]=temp;
    var j = 0;
    for (let i=0; i<res.length; i++) {
        
        if (res[i]===temp) continue;
        while (map[res[i]]>0) {
            if (j===max) j=0;
            l[j]+=res[i];
            j++;
            map[res[i]]--;
        }
        
    }
    return l.join("");
};
