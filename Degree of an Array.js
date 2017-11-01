/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if (nums.length===1) return 1;
    var map = {}, count = [], n = [];
    for (i=0; i<nums.length; i++) {
        if (map[nums[i]]===undefined) {
            map[nums[i]]=1;
            count.push(1);
            n.push(nums[i]);
        }
        else {
            map[nums[i]]++;
            count[n.indexOf(nums[i])]++
        }
    }
    var count_sort = count.slice();
    count_sort.sort(sortNumber);
    function sortNumber(a,b) {return b-a;}
    var p = count.indexOf(count_sort[0]);
    var maxl = nums.lastIndexOf(n[p])-nums.indexOf(n[p])+1;
    for (i=1; i<count_sort.length; i++) {
        if (count_sort[i]<count_sort[i-1]) break;
        n.splice(p,1);
        count.splice(p,1);
        p = count.indexOf(count_sort[i]);
        maxl = Math.min(maxl,nums.lastIndexOf(n[p])-nums.indexOf(n[p])+1);
    }
    return maxl;
};
