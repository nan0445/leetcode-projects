/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    var lp = licensePlate.toLowerCase();
    lp = lp.replace(/[\s0-9]/g,"");
    var res = "";
    len = Number.MAX_VALUE;
    for (let i=0; i<words.length; i++) {
        if (words.length<lp.length) continue;
        if (helper(lp, words[i])) {
            if (words[i].length<len) {
                len = words[i].length;
                res = words[i];
            }
        }
    }
    return res;
    
    function helper(t,s) {
        s=s.split("");
        for (let i=0; i<t.length; i++) {
            let p = s.indexOf(t[i]);
            if (p===-1) return false;
            s.splice(p,1);
        }
        return true;
    }
};
