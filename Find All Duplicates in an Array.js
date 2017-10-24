/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var map = {};
    var res = [];
    for (i=0; i<nums.length; i++) {
        if (map[nums[i]]===undefined) map[nums[i]]=1;
        else res.push(nums[i]);
    }
    return res;
};



////////////////////////////////////////////////////////////
/// Or, use the math way.... /////////////////////////////




var findDuplicates = function(nums) {
  let len = nums.length;
  let ans = [];

  for (let i = 0; i < len; i++) {
    let val = Math.abs(nums[i]) - 1;

    if (nums[val] < 0)
      ans.push(val + 1);
    else
      nums[val] *= -1;
  }

  return ans;
};
