/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    
    let temp = [];
    let res = [];
    helper(S,0);
    function helper(S,m) {
        if (temp.length===S.length) {
            res.push(temp.join(""));
            return;
        }
        for (let i=m; i<S.length; i++) {
            if ((S[i]>='a'&&S[i]<='z')||(S[i]>='A'&&S[i]<='Z')) {
                temp.push(S[i].toUpperCase());
                helper(S,i+1);
                temp.pop();
                temp.push(S[i].toLowerCase());
                helper(S,++i);
                temp.pop();
            } else {
                temp.push(S[i]);
                helper(S,++i);
                temp.pop();
            }
           
        }
    }
    return res;
};
