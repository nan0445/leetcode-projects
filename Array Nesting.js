/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    var map = {};
    var temp = nums.slice();
    var count = 0;
    var maxlen = 0;
    var i=0;
    while (temp.length!==0) {
        if (map[nums[i]]===undefined) {
            map[nums[i]]=1;
            count++;
            temp.splice(temp.indexOf(nums[i]),1);
            i=nums[i];
        } else {
            maxlen = Math.max(maxlen, count);
            count=0;
            if (temp.length>0) i = nums.indexOf(temp[0]);
        }
    }
    return Math.max(maxlen, count);
};
