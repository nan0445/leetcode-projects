/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    var map = {};
    for (let i=0; i<difficulty.length; i++) {
        if (map[difficulty[i]]===undefined) map[difficulty[i]] = profit[i];
        else {
            if (map[difficulty[i]]<profit[i]) map[difficulty[i]] = profit[i];
        }
    }
    function sortNumber(a, b) {return a-b;}
    difficulty.sort(sortNumber);
    var max = 0;
    for (let i=0; i<difficulty.length; i++) {
        if (map[difficulty[i]]>max) max = map[difficulty[i]];
        map[difficulty[i]] = max;
        
    }
    var res = 0;
    
    for (let i=0; i<worker.length; i++) {
        if (map[worker[i]]!==undefined) res += map[worker[i]];
        else {
            if (worker[i]<difficulty[0]) continue;
            var p = 0, k = difficulty.length;
            while (p<k) {
                var mid = p + Math.floor((k-p)/2);
                if (difficulty[mid]<worker[i]) p = mid+1;
                else k = mid;
            }
            res += map[difficulty[p-1]];
        }
    }
    return res;
};
