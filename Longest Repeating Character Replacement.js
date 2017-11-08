/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var res = 0;
    for (var i=0; i<s.length; i++) {
        if (i>0 && s[i]===s[i-1]) continue;
        var count = 1;
        for (var j=1; j<s.length-i; j++) {
            if ((j>k && s[i+count]!==s[i]) || i+count>=s.length) break;
            if (s[i+count]===s[i]) j--;
            count++;
        }
        if (j<=k) {
            if (i+count>=s.length) count += Math.min(k-j+1,i);
        }
        res = Math.max(res, count);
    }
    return res;
};

////////////////////////////////////////////////////////
/////// very slow////////////////////////////////////////
////// should use the code below!///////////////////////

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var max = 0, l = 0, r = 0, count = new Array(26).fill(0);
    while(r < s.length) {
        max = Math.max(max, ++count[s.charCodeAt(r) - 'A'.charCodeAt(0)]);
        if(r - l + 1 - max > k) {
            --count[s.charCodeAt(l++) - 'A'.charCodeAt(0)];
        }
        r++;
    }
    return r - l;
};
