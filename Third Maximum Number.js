/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    var FirMax = -Number.MAX_VALUE;
    var SecMax = -Number.MAX_VALUE;
    var ThiMax = -Number.MAX_VALUE;
    for (i=0; i<nums.length; i++) {
        var tempF = FirMax;
        FirMax = Math.max(FirMax, nums[i]);
        var tempS = SecMax;
        SecMax = Math.max(SecMax, nums[i]) < FirMax ? Math.max(SecMax, nums[i]) : (FirMax === tempF ? SecMax : tempF);
        ThiMax = Math.max(ThiMax, nums[i]) < SecMax ? Math.max(ThiMax, nums[i]) : (SecMax === tempS ? ThiMax : tempS);
    }
     
    if (ThiMax !== -Number.MAX_VALUE) return ThiMax;
    else return FirMax;
};
