/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    addlist("", result, n, n);
    return result;
    
    function addlist(temp, result, l, r) {
        if (l>r) return;
        if (l>0) addlist(temp+"(", result, l-1, r);
        if (r>0) addlist(temp+")", result, l, r-1);
        if (l===0 && r===0) {
            result.push(temp);
            return;
        }
    }
};
