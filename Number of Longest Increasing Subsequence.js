/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    var N=nums.length;
    if (N<=1) return N;
    var lengths = new Array(N).fill(1);
    var counts = new Array(N).fill(1);
    for (let j=0; j<N; j++) {
        for (let i=0; i<j; i++) {
            if (nums[i]<nums[j]) {
                if (lengths[i]>=lengths[j]) {
                    lengths[j] = lengths[i] + 1;
                    counts[j] = counts[i];
                } else if (lengths[i] + 1 === lengths[j]) counts[j] += counts[i];
            }
        }
    }
    
    var res = 0;
    var temp = lengths.slice();
    function sortNumber (a, b) {return b-a;}
    temp.sort(sortNumber);
    for (let i=0; i<N; i++) {
        if (lengths[i]===temp[0]) res += counts[i];
    }
    return res;
    
};
