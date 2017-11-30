/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let arr =[]
  let s = {};
    
  function dfs(index, result) {
    if(result.length>1){
      if(s[result]===undefined){
        arr.push(result.slice());
        s[result] = 1;
      }
    }
    for (var i = index; i < nums.length; i++) {
      if (result.length === 0 || nums[i] >= result[result.length - 1]) {
        result.push(nums[i]);
        dfs(i + 1, result);
        result.pop();
      }
    }
  }
  
  dfs(0, []);
  return arr;    
};
