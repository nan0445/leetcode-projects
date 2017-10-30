/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    var ar = [];
    var temp = "";
    var sign = "+";
    for(i=0; i<s.length; i++) {
        if (s[i]===" ") continue;
        if (/^[0-9]/.test(s[i])) temp += s[i];
        if (s[i]==="+"||s[i]==="-"||s[i]==="/"||s[i]==="*"||i===s.length-1) {
            if (sign==="+") ar.push(temp-0);
            if (sign==="-") ar.push(-(temp-0));
            if (sign==="*") ar.splice(ar.length-1,1,ar[ar.length-1]*(temp-0));
            if (sign==="/") {
                if (ar[ar.length-1]<0) ar.splice(ar.length-1,1,Math.ceil(ar[ar.length-1]/(temp-0)));
                else ar.splice(ar.length-1,1,Math.floor(ar[ar.length-1]/(temp-0)));
            }
            temp="";
            sign = s[i];
        }
    }
    var res = 0
    for (i=0;i<ar.length; i++) {
        res += ar[i];
    }
    return res
    
};
