/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var res = [];
    var map = {};
    for (let i=0; i<nums.length; i++) {
        if (map[nums[i]]===undefined) map[nums[i]]=1;
        else map[nums[i]]++;
    }
    for (let key in map) {
        if (res[map[key]]===undefined) res[map[key]] = [];
        res[map[key]].push(key-0);
    }
    var fin = [];
    for (let i=res.length-1; i>=0 && fin.length<k; i--) {
        if (res[i]!==undefined) {
            for (let j=0; j<res[i].length; j++) {
                if (fin.length>=k) return fin;
                else fin.push(res[i][j]);
            }
        } else continue;
    }
    return fin;
};
