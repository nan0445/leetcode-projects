/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    function sortNumber(a,b) {return b-a}
    ages.sort(sortNumber);
    var res = 0;
    for (let i=0; i<ages.length; i++) {
        for (let j=i+1; j<ages.length; j++) {
            if (ages[j]<=0.5*ages[i]+7) break;
            else {
                if (ages[i]===ages[j]) res += 2;
                else res++;
            }
            
        }
    }
    return res;
};
