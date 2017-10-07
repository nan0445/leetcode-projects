/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var flag1 = true, flag2 = true, flag3 = true;
    for (i=0; i<word.length; i++) {
        if (i===0) {
            if (/^[A-Z]+$/.test(word[i])) {
                
                flag3 = false;
            } else {
                
                flag1 = false;
                flag2 = false;
            }
        } else {
            if (/^[A-Z]+$/.test(word[i])) {
                flag3 = false;
                flag2 = false;
            } else flag1 = false;
        }
    }
    return (flag1 || flag2 || flag3);
};
