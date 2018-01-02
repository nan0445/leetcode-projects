/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    function sortNumber(a,b) {return a-b;}
    nums.sort(sortNumber);
    var map = {};
    let temp = [];
    let res = [];
    helper(nums,0);
    return res;
    function helper(nums, start) {
        if (map[temp.slice()]===undefined) {
            map[temp.slice()]=1;
            res.push(temp.slice());
        }
        for (let i=start; i<nums.length; i++) {
            temp.push(nums[i]);
            helper(nums,i+1);
            temp.pop();
        }
    }
};
