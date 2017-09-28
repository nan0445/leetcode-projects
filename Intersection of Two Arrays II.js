/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    var n = Math.min(nums1.length, nums2.length);
    if (n<1) return [];
    if (n===nums1.length) {var temp = nums1; tocampare = nums2;}
    else {var temp = nums2; tocampare = nums1;}
    
    var p = 0;
    var result = [];
    
    for (i=0; i<n; i++) {
        var p = tocampare.indexOf(temp[i]);
        if (p !== -1) {
                
            result.push(temp[i]);
            tocampare.splice(p,1);
        }   
        
    }
    return result;
};
