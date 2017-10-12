/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    //if (nums.length<=1) return nums;
    var result = [];
    var t_temp = nums.slice();
    
    do {
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
        result.push(nums.slice());
        
    }
    while (nums.toString() !== t_temp.toString());
    return result;
};


////////////////////////////////////////
/// I can not quite understand the codes below///

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // general idea is to recurse. At each level, iterate
    // through the items in the list. Take all the other
    // items in the list, generate the permutations for them,
    // and add the current item to the front.
    if (nums.length === 0) {
        return [];
    } else if (nums.length === 1) {
        return [nums];
    }
    
    var results = [];
    
    for (var i = 0; i < nums.length; i++) {
        // make a copy of the array minus the index element
        var val = nums[i];
        var copy = nums.slice();
        copy.splice(i,1);
        var lowerResults = permute(copy);
        lowerResults.forEach(function(item) {
            //console.log("item = " + item);
            results.push([val].concat(item));
        });
    }
    
    return results;
};
