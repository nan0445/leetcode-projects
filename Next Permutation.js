/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    if (nums.length > 1) {
        var temp = [];
        temp.push(nums[nums.length-1]);
        for (i=nums.length-2; i>=0; i--) {
            if (nums[i+1] <= nums[i]) {
                temp.push(nums[i]);
            } else {
                nums.splice(i+1, temp.length);
                for (k=0; k<temp.length; k++) nums.push(temp[k]);
                for (j=i+1; j<=i+temp.length; j++) {
                    if (nums[i] < nums[j]) {
                        var tt = nums[i];
                        nums[i] = nums[j];
                        nums[j] = tt;
                        break;
                    }
                } 
                break;
            }
        }
        if (i<0) {
            for (m=0; m<temp.length; m++) {
                nums[m] = temp[m];
            }
        }
    } 
    
        
    
};
