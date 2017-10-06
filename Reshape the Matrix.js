/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.length<1) return nums;
    var h = nums.length;
    var w = nums[0].length;
    if (h*w !== r*c) return nums;
    var m = 0;
    var result = [];
    var temp = [];
    for (i=0; i<h; i++) {
        for (j=0; j<w; j++) {
            if (m===c) {
                m=0;
                result.push(temp);
                temp = [];
            }
            temp.push(nums[i][j]);
            m++;
        }
    }
    result.push(temp);
        
    return result;
};
