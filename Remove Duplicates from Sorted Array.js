var removeDuplicates = function(nums) {
    
    if (nums.length < 2) {return nums.length;}
    for (i=0; i<nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1);
            i-=1;
        }
    }
    return nums.length;
};
