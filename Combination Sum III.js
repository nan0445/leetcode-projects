/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
   
    var result = [];
    var combine = [];
    var candidates = [1,2,3,4,5,6,7,8,9];
    helper(result, combine, candidates, n, 0, k);
    return result;
    
    function helper(result, combine, candidates, target, start, k) {
        if (target === 0 && combine.length === k) {
            result.push(combine);
            return;
        }
        
        for (var i = start; i<candidates.length && target>=candidates[i]; i++) {
            combine.push(candidates[i]);
            
            helper(result, combine.slice(), candidates, target-candidates[i], i+1, k);
           
            combine.pop();
        }
    }
    
    function sortNumber(a, b) {
        return a-b;
    }
};
