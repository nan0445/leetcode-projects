/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var res = Number.MAX_VALUE;
    var closest;
    function sortNumber(a, b) {return a-b;}
    nums.sort(sortNumber);
    for (var i=0; i<nums.length; i++) {
        if (i>0 && nums[i] === nums[i-1]) continue;
        var l = i+1;
        var r = nums.length-1;
        var temp = target - nums[i];
        while (l<r) {
            if (Math.abs(temp-nums[l]-nums[r])<=res) closest = nums[i]+nums[l]+nums[r];
            res = Math.min(res, Math.abs(temp-nums[l]-nums[r]));
            if (nums[l]+nums[r]<temp) l++;
            else if (nums[l]+nums[r]>temp) r--;
            else if (nums[l]+nums[r] === temp) return target;
            while (nums[l] === nums[l-1] && nums[r] === nums[r+1]) {
                    l++;
            }
        }
    }
    return closest;
};
