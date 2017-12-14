/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var temp = [];
    var res = [];
    helper(s,0,4);
    return res;
    
    function helper(s,start,k) {
        if (k===0) {
            var t = temp.join(".");
            res.push(t);
            return;
        }
        for (let i=start; i<start+3 && i<s.length; i++) {
            if (k===1) var p = s.slice(start);
            else var p = s.slice(start, i+1);
            if ((p[0]!=="0" && p.length>1 && (p-0)<256 && p.length<=3) || (p.length===1)) {
                temp.push(p);
                helper(s,i+1,k-1);
                temp.pop();
            }
            if (k===1) break;
        }
    }
};
