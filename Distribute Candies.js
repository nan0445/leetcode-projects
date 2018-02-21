/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var map={};
    var count = 0;
    for (let i=0; i<candies.length; i++) {
        if (map[candies[i]]===undefined) {
            map[candies[i]]=1;
            count++;
            if (count===candies.length/2) return count;
        }
    }
    return count;
};
