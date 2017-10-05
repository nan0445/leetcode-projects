/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [];
    var combine = [];
    candidates.sort(sortNumber);
    var map = {};
    helper(result, combine, candidates, target, 0, map);
    return result;
    
    function helper(result, combine, candidates, target, start, map) {
        if (target === 0) {
            if (map[combine] === undefined) {
                map[combine] = 1;
                result.push(combine);
                return;
            } else return;
            
        }
        
        for (var i = start; i<candidates.length && target>=candidates[i]; i++) {
            combine.push(candidates[i]);
            
            helper(result, combine.slice(), candidates, target-candidates[i], i+1, map);
           
            combine.pop();
        }
    }
    
    function sortNumber(a, b) {
        return a-b;
    }
};
