/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var all = 0, cur = 0, p = 0;
    for (let i=0; i<gas.length; i++) {
        var temp = gas[i]-cost[i];
        all += temp;
        cur += temp;
        if (cur<0) {
            cur = 0;
            p = i+1;
        }
    }
    if (all<0) return -1;
    return p===gas.length ? 0 : p;
};
