/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    var temp = [];
    if (nums.length<3) return false;
    var start = nums[0];
    var end = nums[0];
    for (let i=1; i<nums.length; i++) {
        if (nums[i]>nums[i-1]) end = nums[i];
        if (nums[i]<nums[i-1]) {
            if (start < end) {
                while (temp.length>0) {
                    if (temp[temp.length-1][0]>=start && temp[temp.length-1][1]<=end) temp.pop();
                    else break;
                }
                temp.push([start, end]);
            }
            start = nums[i];
            end = nums[i];
        }
        for (let j=0; j<temp.length; j++) {
            if (nums[i]>temp[j][0] && nums[i]<temp[j][1]) return true;
        }
        
    }
    return false;
};
