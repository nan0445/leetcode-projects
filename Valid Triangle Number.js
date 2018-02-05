/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    var count = 0;
    function sortNumber(a,b) {return a-b;}
    nums.sort(sortNumber);
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                if(nums[i]+nums[j]>nums[k]) count++;
                else  break;
            }
        }
    }
    
    return count;
};

//////////////////////////
//// it can be faster////

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
        nums.sort(function(a, b){ return a-b});
    var count = 0, n = nums.length;
    for (var i=n-1;i>=2;i--) {
        var l = 0, r = i-1;
        while (l < r) {
            if (nums[l] + nums[r] > nums[i]) {
                count += r-l;
                r--;
            }
            else l++;
        }
    }
    return count;
};
