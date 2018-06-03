/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var temp1 = []
    var temp2 = []
    for (let i=0; i<S.length; i++) {
        if (S[i]!=="#") {
            temp1.push(S[i]);
        } else {
            temp1.pop();
        }
    }
    for (let i=0; i<T.length; i++) {
        if (T[i]!=="#") {
            temp2.push(T[i]);
        } else {
            temp2.pop();
        }
    }
    var res1=temp1.join("");
    var res2 = temp2.join("");
    return res1==res2
};
