/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";
    var l1 = num1.length;
    var l2 = num2.length;
    var l = l1+l2;
    var res = [];
    for (i=0; i<l; i++) res.push(0);
    
    for (i=l1-1; i>=0; i--) {
        var temp = 0;
        var ttemp = 0;
        var k = i+l2;
        for (j=l2-1; j>=0; j--) {
            var multi = (num1[i]-"0")*(num2[j]-"0");
            var stay = multi % 10;
            var next = Math.floor(multi/10);
            var sumhere = res[k]+stay+temp+ttemp;
            var sumnext = Math.floor(sumhere/10);
            res[k] = sumhere % 10;
            k--;
            temp = next;
            ttemp = sumnext;
        }
        res[k] = temp+ttemp;
    }
    if (res[0] === 0) res.splice(0,1);
    return res.join('');
};
