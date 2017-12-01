/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var temp = new Array(nums.length).fill(1);
    for (var i=nums.length-2; i>=0; i--) {
        temp[i] = nums[i+1] * temp[i+1];
    }
    var res = [];
    res.push(temp[0]);
    var tt = 1;
    for (var i=1; i<nums.length; i++) {
        tt *= nums[i-1];
        res.push(tt*temp[i]);
    }
    return res;
};

///////////////////////////////////
/// This can be better saving the space using the methods below////////////

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var products = new Array(nums.length).fill(1);
    var runningProduct = 1;
    for (var i = 1; i < nums.length; i++) {
        runningProduct *= nums[i-1];
        products[i] = runningProduct;
    }
    runningProduct = 1;
    for (var j = nums.length - 2; j >= 0; j--) {
        runningProduct *= nums[j+1];
        products[j] *= runningProduct;
    }
    return products;
};
