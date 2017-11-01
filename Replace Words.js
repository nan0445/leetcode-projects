/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var map={};
    for (i=0; i<dict.length; i++) map[dict[i]]=0;
    var words = sentence.split(' ');
    var res="";
    for (i=0; i<words.length; i++) {
        for (j=0; j<words[i].length; j++) {
            var pre = words[i].substring(0,j+1);
            if (map[pre]!== undefined) break;
        }
        res = res + " " + pre;
    }
    return res.slice(1);
};

///////////////////////////////////////////////////////////
//// wheels????///////////////////////////////////////////
/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    return sentence.replace(RegExp('\\b(' + dict.join('|') + ').*?\\b', 'g'), '$1')
};
