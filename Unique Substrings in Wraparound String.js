/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    var x = "abcdefghijklmnopqrstuvwxyz";
    var count = 0;
    var num = [];
    for (i=0; i<26; i++) num[i]=0;
    for (i=0; i<p.length; i++) {
        if (i>0 && (x.indexOf(p[i])-x.indexOf(p[i-1])===1 || x.indexOf(p[i-1])-x.indexOf(p[i])===25)) count++;
        else count = 1;
        var idx = x.indexOf(p[i]);
        num[idx] = Math.max(num[idx], count);
    }
    var sum = 0;
    for (i=0; i<26; i++) {
        sum += num[i];
    }
    return sum;
};
