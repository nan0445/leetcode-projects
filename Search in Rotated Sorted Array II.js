/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    return nums.indexOf(target)===-1 ? false : true;
};

/////////////////////////////////
// above is not the "right way"///
/////// see below /////////////////

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let low = 0; high = nums.length;
    while( low <= high ){
        let mid = low + ( ( high - low) >> 1 );
        if( nums[mid] == target ) return true;
        else if( nums[mid] < nums[high]){
            if( nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }else if( nums[mid] > nums[high]){
            if( target < nums[mid] && target >= nums[low] ) high = mid - 1;
            else low = mid + 1;
        }else high--;
    }
    return nums[low] == target ? true : false;
};
