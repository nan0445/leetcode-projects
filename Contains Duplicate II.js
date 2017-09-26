/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var obj = new Object();
    for(i = 0 ; i < nums.length ; i++){
    	if(typeof(obj[nums[i]]) != 'undefined'){
    		if(i - obj[nums[i]] <= k){
    			return true;
    		}
    	}
    	obj[nums[i]] = i;
    }
    return false;
};

////////////////////////////////////////////////////
////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    if (nums.length <= 1) return false;
    var map = {};
    for (var i in nums) {
        if (map[nums[i]] && (i-map[nums[i]])<=k) return true;
        map[nums[i]] = i;
    }
    return false;
};

/// why the above one can not use i=0; i<nums.length; i++ way?
