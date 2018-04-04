/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let m = new Array(nums1.length).fill(0),
        result = [], mark,
        temp;
    k = Math.min(nums1.length * nums2.length, k);
    
    while (k--) {
        temp = Number.MAX_VALUE;
        for (let i=0; i<m.length; i++) {
            if (nums1[i] + nums2[m[i]] < temp) {
                mark = i;
                temp = nums1[i] + nums2[m[i]];
            }
        }
        result.push([ nums1[mark], nums2[m[mark]] ]);
        m[mark]++;
    }
    return result;
};
