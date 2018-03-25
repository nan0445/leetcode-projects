/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var x = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var y = "abcdefghijklmnopqrstuvwxyz";
    var map = {};
    for (let i=0; i<26; i++) {
        map[y[i]]=x[i];
    }
    var map2 = {};
    var res = 0;
    for (let i=0; i<words.length; i++) {
        var temp = "";
        for (let j=0; j<words[i].length; j++) {
            temp+=map[words[i][j]];
        }
        if (map2[temp]===undefined){
            res++;
            map2[temp] = 1;
        } else map2[temp]++;
    }
    return res;
};
