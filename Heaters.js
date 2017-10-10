/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    function sortNumber(a, b) {return a-b;}
   // houses.sort(sortNumber);
    heaters.sort(sortNumber);
    
   // var radius = heaters[0]-houses[0];
    var radius = 0;
    for (i=0; i<houses.length; i++) {
        var l=0, r=heaters.length-1;
        while (r-l>1) {
            var mid = Math.floor((r+l)/2);
            if (houses[i]>=heaters[mid]) l=mid;
            else r=mid;
        }
        
        radius = Math.max(radius, Math.min(Math.abs(heaters[r]-houses[i]), Math.abs(heaters[l]-houses[i])));
    }
    
    return radius;
};
