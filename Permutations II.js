/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
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
////////////////////////////////////////////////
///Above of which is exactly the same as Permutation.js/////
/// however, there is still a recursion way to do this///

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums === null || nums.length < 1){
        return [];
    }
    var result = [];
    var resultItem = [];
    var visited = [];
    nums.sort();
    permuteHelper(result, resultItem, visited, nums);
    
    function permuteHelper(result,resultItem,visited,nums){
        if(resultItem.length === nums.length){
            result.push(JSON.parse(JSON.stringify(resultItem)));
            return;
        }
        for(var i = 0; i < nums.length; i++){
            if(visited[i] === 1 || (i !== 0 && nums[i] === nums[i-1] && visited[i-1] === 0)){
                continue;
            }
            visited[i] = 1;
            resultItem.push(nums[i]);
            permuteHelper(result,resultItem,visited,nums);
            resultItem.pop();
            visited[i] = 0;
        }
    }
    
    return result;
};
