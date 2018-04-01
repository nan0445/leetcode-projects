/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var map = {};
    //return cpdomains[0].split(" ")
    for (let i=0; i<cpdomains.length; i++) {
        var temp = cpdomains[i].split(" ");
        var t1 = parseInt(temp[0]);
        var t2 = temp[1].split(".");
        var tt = "";
        for (let j=t2.length-1; j>=0; j--) {
            if (j===t2.length-1) tt = t2[j] + tt;
            else tt = t2[j] + "." + tt;
            if (map[tt]===undefined) map[tt] = t1;
            else map[tt] += t1;
        }
        
    }
    var res = [];
    for (let i in map) {
        res.push(map[i]+" "+i);
    }
    return res;
};
