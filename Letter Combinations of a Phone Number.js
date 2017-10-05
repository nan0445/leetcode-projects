/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if (digits === "") return [];
    var map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var result = [];
    var temp = "";
    help(digits, result, 0, temp);
    return result;
    
    function help(digits, result, offset, temp) {
        if (offset>=digits.length) {
            result.push(temp);
            return;
        }
        var tt =  map[digits[offset]-0];
        for (var i in tt) {
            
            help(digits, result, offset+1, temp+tt[i]);
            
        }
    }
};

///// very weird that can not use i=0; i<tt.length; i++ for line 20??????????????
