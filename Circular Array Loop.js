/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    var curr=0;
    var loop=[];
    var trap=[];
    var temp;
    if (nums.length<1) return false;
    while (true) {
        temp = curr;
        var next = nums[curr]+curr;
        if (next>=nums.length) next-=nums.length;
        if (next<0) next+=nums.length;
        if (nums[temp]*nums[next]>0) loop.push(curr);
        else if (nums[temp]*nums[next]<0) loop=[];
        nums[curr]=0;
        curr=next;
        if (nums[next]===0) {
            if (next !== temp && loop.indexOf(next)!==-1 && trap.indexOf(next)===-1) return true;
            else {
                trap.push(temp);
                for (i=0; i<nums.length; i++) {
                    if (nums[i] !== 0) {curr = i; break}
                }
                if (i===nums.length) return false;
            }
        }
        
    }
    return false;
};

///////// not O(1) space///////////////////////////
/////////// below is!!! though I can not understand //////////////////////////

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    var n = nums.length, mark = nums.length;
    for (var i=0; i<n; i++) if (mod(nums[i], n) == 0) nums[i] = 0;
    for (var i=0; i<n; i++) {
        if (mod(nums[i], n) == 0) continue;
        var j = i, isPos = nums[i] > 0;
        while (mod(nums[j], n) != 0 && (nums[j] > 0) == isPos) {
            var k = mod(j + nums[j], n);
            nums[j] = mark;
            j = k;
        }
        if (nums[j] == mark) return true;
        mark += n;
    }
    return false;
};

var mod = function(a, b) {
    return ((a % b) + b) % b;
};
