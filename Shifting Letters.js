/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    var temp = "abcdefghijklmnopqrstuvwxyz";
    var ind = 0;
    S=S.split('');
    var sum = 0;
    for (let i=0; i<shifts.length; i++) {
        shifts[i] %= 26;
        sum += shifts[i];
    }
    var m = [];
    m[0] = sum;
    for (let i=1; i<shifts.length; i++) {
        sum-=shifts[i-1];
        m[i] = sum;
    }
    
    for (let j=0; j<m.length; j++) {
            ind = temp.indexOf(S[j]);
            ind = ind + m[j];
            if (ind>=26) ind = ind % 26;
            S[j] = temp[ind];
        
    }
    return S.join('');
};
