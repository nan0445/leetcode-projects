/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    res = [];
    res[0] = 0;
    for (var m=0; m<needs.length; m++) res[0] += needs[m]*price[m];
    helper(price, special, needs, 0);
    return res[0];
    
    function helper(price, special, left, sum) {
        var temp=left.slice();
        for (var i=0; i<special.length; i++) {
            var flag = false;
            for (var j=0; j<left.length; j++) {
                if (temp[j]<special[i][j]) flag=true;
                temp[j]-=special[i][j];
                
            }
            if (flag) {
                var cur = 0;
                for (var j=0; j<left.length; j++) {
                    temp[j]+=special[i][j];
                    cur += temp[j]*price[j];
                }
                //res.push(sum+cur);
                res[0]=Math.min(res[0], sum+cur);
            }
            else {
                sum += special[i][left.length];
                helper(price, special, temp, sum);
                sum -= special[i][j];
                for (var j=0; j<left.length; j++) temp[j]+=special[i][j];
            }
        }
    }
};
