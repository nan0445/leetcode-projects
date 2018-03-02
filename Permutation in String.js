/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length>s2.length) return false;
    var map = {};
    for (let i=0; i<s1.length; i++) {
        if (map[s1[i]]===undefined) map[s1[i]]=1;
        else map[s1[i]]++;
    }
    var temp = [];
    for (let i=0; i<s2.length; i++) {
        if (map[s2[i]]===undefined) {
            for (let j=0; j<temp.length; j++) map[temp[j]]++;
            temp = [];
        } else {
            if (map[s2[i]]===0) {
                var idx = temp.indexOf(s2[i]);
                var t = temp.slice(0,idx+1);
                temp.splice(0,idx+1);
                for (let j=0; j<t.length; j++) map[t[j]]++;
                temp.push(s2[i]);
                map[s2[i]]--;
            } else {
                temp.push(s2[i]);
                map[s2[i]]--;
            }
        }
        if (temp.length===s1.length) return true;
        if ((temp.length+s2.length-i)<s1.length) return false;
    }
    
    return false;
};
