/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
    var res = "";
    if (S.indexOf("@")!==-1) {
        S=S.toLowerCase();
        var temp = S.split("@");
        var t = temp[0][0] + "*****" + temp[0][temp[0].length-1];
        res = t+ "@" + temp.pop();
        
    } else {
        var temp = "";
        for (let i=0; i<S.length; i++) {
            if (S[i]!=="+" && S[i]!=="-" && S[i]!==" " && S[i]!=="(" && S[i]!==")") temp += S[i];
            
        }
        if (temp.length>10) res += "+";
        var count = temp.length-10;
        for (let i=0; i<count; i++) res += "*";
        if (count>0) res += "-";
        res += "***-***-";
        res += temp.slice(temp.length-4,temp.length);
        
    }
    return res;
};
