/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    var n = Math.min(nums1.length, nums2.length);
    if (n<1) return [];
    if (n===nums1.length) {var temp = nums1; tocampare = nums2;}
    else {var temp = nums2; tocampare = nums1;}
    temp = temp.sort();
    
    var result = [];
    if (tocampare.indexOf(temp[0]) !== -1) result.push(temp[0]);
    for (i=1; i<n; i++) {
        if (temp[i] !== temp[i-1]) {
            if (tocampare.indexOf(temp[i]) !== -1) result.push(temp[i]);
        }
    }
    return result;
};
