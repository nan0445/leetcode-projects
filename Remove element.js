var removeElement = function(nums, val) {
    if (nums.length === 0 || nums === null || nums === undefined) {return 0;}
    if (val === null || val === undefined || val === '') {return nums.length}
    for (i=0; i<nums.length; i++){
        if (nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums, nums.length;
};
