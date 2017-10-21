/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
    //nums = [5,5,5,5,4,4,4,4,3,3,3,3];
    if (nums.length<4) return false;
    var sum = 0;
    for (i=0; i<nums.length; i++) sum+= nums[i];
    if (sum%4!==0) return false;
    var side = sum/4;
    function sortNumber (a, b) {return a-b;}
    nums.sort(sortNumber);
    return makesquaresub(nums, nums.length-1, [side, side, side, side]);
    
    function makesquaresub(nums, k, s) {
        if (k<0) return s[0]===0 && s[1]===0 && s[2]===0 && s[3]===0;
        for (var p=0; p<4; p++) {
            if (nums[k]>s[p]) continue;
            s[p]-=nums[k];
            if (makesquaresub(nums, k-1, s)) return true;
            s[p]+=nums[k];
        }
        return false;
    }
};
