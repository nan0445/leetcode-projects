/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    //maxChoosableInteger=18;
    //desiredTotal = 79;
    var sum = (1+maxChoosableInteger)*maxChoosableInteger>>1;
    if (sum<desiredTotal) return false;
    if (desiredTotal<=maxChoosableInteger) return true;
    var map = {};
    return help(maxChoosableInteger, desiredTotal, 0, map);
    
    function help(n, target, used, map) {
        if (map[used] !== undefined) return map[used];
        for (var i=n; i>=1; i--) {
            var mask = 1<<i;
            if ((mask&used) === 0 && (i>=target || !help(n, target-i, mask|used, map))) return map[used]=true;
        }
        return map[used] = false;
    }
};
