/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var count = 0;
    var l = 0;
    var map = {};
    map[0] = -1;
    for (var i=0; i<nums.length; i++) {
        if (nums[i]===0) count--;
        else count++;
        if (map[count]===undefined) map[count]=i;
        else l = Math.max(l, i-map[count]);
    }
    return l;
};

////////////////////////////////////////////////
/// Hash map //////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let res = 0, n = nums.length, sum = 0;
    let m = new Map();
        m.set(0,-1);

    for (let i = 0; i < n; i++) {
        sum += (nums[i] == 1) ? 1 : -1;
        if (m.has(sum)) {
            res = Math.max(res, i - m.get(sum));
        } else {
            m.set(sum,i);
        }
    }
    return res;
};
