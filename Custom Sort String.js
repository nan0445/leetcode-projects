/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    var map = {};
    var temp = new Array(S.length);
    for (let i=0; i<S.length; i++) {
        map[S[i]]=i;
        temp[i]=[];
    }
    var t2 = [];
    for (let i=0; i<T.length; i++) {
        if (map[T[i]]===undefined) t2.push(T[i]);
        else temp[map[T[i]]].push(T[i]);
    }
    var res = "";
    for (let i=0; i<temp.length; i++) {
        temp[i]=temp[i].join('');
        res+=temp[i];
    }
    res += t2.join("");
    return res;
};
