var searchInsert = function(nums, target) {
    for (i=0; i<nums.length; i++) {
        if (target<=nums[i]) {
            return i
        } 
    }    
    return i
};
