/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var l=0, r=letters.length-1;
    if (target < letters[l] || target >= letters[r]) return letters[0];
    while (l<r) {
        var mid = l + Math.floor((r-l)/2);
        if (target>=letters[mid]) l = mid + 1;
        else if (target<letters[mid]) r = mid;
    }
    return letters[l];
};
