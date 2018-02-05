/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var n = Math.floor(Math.sqrt(area));
    while (area%n!==0) {
        n--;
    }
    return [area/n,n];
};
