/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length<1) return 0;
    function sortNumber(a,b) {return b-a;}
    citations.sort(sortNumber);
    for (var i=0; i<citations.length; i++) {
        if (i+1>citations[i]) return i;
        else if (i+1===citations[i]) return i+1;
    }
    return i;
};
