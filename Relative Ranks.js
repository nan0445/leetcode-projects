/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var map = {};
    var res = new Array(nums.length).fill("");
    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = i;
    }
    function sortNumber(a,b) {
        return b-a;
    }
    nums.sort(sortNumber);
    for (let i=0; i<nums.length; i++) {
        res[map[nums[i]]]=(i+1).toString();
        if (i===0) res[map[nums[i]]]="Gold Medal";
        if (i===1) res[map[nums[i]]]="Silver Medal";
        if (i===2) res[map[nums[i]]]="Bronze Medal";
    }
    return res;
};
