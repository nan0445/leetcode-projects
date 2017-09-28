/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1, end = n;
        while (end - start > 1) {
            n=Math.floor((end+start+1)/2);
            if (isBadVersion(n)) end = n;
            else start = n;
        }
        if (isBadVersion(start)) return start;
        else return end;
    };
};
