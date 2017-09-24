/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length<=1) return s;
    var index = [];
    var vowel = [];
    var temp = s.toLowerCase();
    for (i=0; i<s.length; i++) {
        if (temp[i] === "a" || temp[i] === "o" || temp[i] === "i" || temp[i] === "e" || temp[i] === "u") {
            index.push(i);
            vowel.push(s[i]);
        }
    }
    if (index.length<=1) return s;
    
    for (i=0; i<index.length; i++) {
        s = s.slice(0,index[i]).concat(vowel[vowel.length-i-1]).concat(s.slice(index[i]+1));
    }
    return s;
};

////////////////////////////////////////////////////////////////////////////////////
/*
first: convert the string to an array using split('');
then many array functions.....
at last conver the array back to string using join('');
*/
