/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    var temp = num.toString().split("");
    var nums = temp.slice();
    function sortStr(a,b) {return (b-0)-(a-0);}
    temp.sort(sortStr);
    for (var i=0; i<temp.length; i++) {
        if (temp[i]!==nums[i]) {
            var idx = nums.slice(i).lastIndexOf(temp[i])+i;
            nums[idx]=nums[i];
            nums[i]=temp[i];
            break;
        }
    }
    return nums.join("")-0;
};
