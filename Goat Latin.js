/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var temp = S.split(" ");
    for (let i=0; i<temp.length; i++) {
        var p = temp[i][0].toLowerCase();
        if (p==="a" || p==="e" || p==="i" || p==="o" || p==="u") {
            temp[i] += "ma";
        } else {
            var x = temp[i][0];
            temp[i] = temp[i].slice(1, temp[i].length) + x + "ma";
        }
        for (let j=0; j<i+1; j++) temp[i] += "a";
    }
    return temp.join(" ")
};
