/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for (var i=0; i<bits.length-1; i++) {
        if (bits[i]===1) i++;
    }
    return i===bits.length ? false : true;
};
