/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var x = "abcdefghijklmnopqrstuvwxyz";
    var map = {};
    for (let i=0; i<26; i++) {
        map[x[i]]=widths[i];
    }
    var l = 0;
    var line = 1;
    for (let i=0; i<S.length; i++) {
        l += map[S[i]];
        if (l>100) {
            l=map[S[i]];
            line++;
        }
    }
    return [line,l];
};
