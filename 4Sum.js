/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    function sortNumber(a,b) {return a - b;}
    var result = [];
    nums = nums.sort(sortNumber);
    //var map = {};
    for (i=0; i<nums.length-3; i++) {
            if (i>0 && nums[i] === nums[i-1]) continue;
        for (j=i+1; j<nums.length-2; j++) {
            if (j>i+1 && nums[j] === nums[j-1]) continue;
            var l = j+1;
            var r = nums.length-1;
            while (l<r) {
                var four = [];
                if (nums[l]+nums[r] > target-nums[i]-nums[j]) r--;
                else if (nums[l]+nums[r] < target-nums[i]-nums[j]) l++;
                else if (nums[l]+nums[r] === target-nums[i]-nums[j]) {
                  //  if (map[[nums[i], nums[j], nums[l], nums[r]]] === undefined) {
                        four.push(nums[i],nums[j],nums[l],nums[r]);
                        result.push(four);
                       // map[[nums[i], nums[j], nums[l], nums[r]]] = 1;
                  //  }
                    four = [];
                    r--;
                    l++;
                    while (nums[l] === nums[l-1] && nums[r] === nums[r+1]) {
                        l++;
                    }
                }
            }
        }
    }
    return result;
};
