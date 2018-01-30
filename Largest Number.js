/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    function sortNumber(a,b){
        a = a.toString();
        b = b.toString();
        var i=0, j=0;
        var flag = true;
        while (flag) {
            if (a[i]!==b[j]) return b[j]-a[i];
            else {
                i++;
                j++;
                if (i===a.length) i = 0;
                if (j===b.length) j = 0;
            }
            if (i===0 && j===0) flag = false;
        }
        return b[j]-a[i];
    }
    nums.sort(sortNumber);
    if (nums[0]===0) return "0";
    return nums.join("");
    
};
