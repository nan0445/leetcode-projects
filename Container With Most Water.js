/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0; 
    var r = height.length-1;
    var Maxarea = 0;
    while (l<r) {
        Maxarea = Math.max(Maxarea, Math.min(height[r], height[l])*(r-l));
        if (height[l]<= height[r]) l++;
        else r--;
                           
    }
    return Maxarea;
};
