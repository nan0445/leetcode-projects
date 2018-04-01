/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    var map = {};
    var count = 1;
    for (let i=1; i<S.length; i++) {
        if (S[i]===S[i-1]) {
            count++;
        } else count = 1;
        if (count>=3) map[S[i]]=count;
            
    }
    var res = 0;
    for (let i=0; i<words.length; i++) {
        var p = 0;
        for (j=0; j<words[i].length; j++) {
            var flag1 = true;
            var flag2 = true;
            var flag = true;
            var c1 = 1;
            var c2 = 1;
            if (words[i][j]!==S[p]) {
                break;
            }
            while (flag) {
                if (words[i][j]===words[i][j+1]) {c1++;j++;}
                else flag1 = false;
                if (S[p]===S[p+1]) {c2++;p++;}
                else flag2 = false;
                if (flag1===false && flag2===false) flag = false;
            }
            p++;
            if (c1!==c2) {
                if (c2<3 || c1>c2) {
                    break;
                }
            }
        }
        if (j===words[i].length && p===S.length) res++;
    }
    return res;
};
