/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length<1) return 0;
    var p=citations.length;
    for (var i=p-1; i>=0; i--) {
        if (p-i>citations[i]) return p-i-1;
        else if (p-i===citations[i]) return p-i;
    }
    return p;
};
