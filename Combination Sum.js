/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var combine = [];
    candidates.sort(sortNumber);
    helper(result, combine, candidates, target, 0);
    return result;
    
    function helper(result, combine, candidates, target, start) {
        if (target === 0) {
            result.push(combine);
            return;
        }
        
        for (var i = start; i<candidates.length && target>=candidates[i]; i++) {
            combine.push(candidates[i]);
            
            helper(result, combine.slice(), candidates, target-candidates[i], i);
           
            combine.pop();
        }
    }
    
    function sortNumber(a, b) {
        return a-b;
    }
};
