/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var A = 0;
    var B = 0;
    var map = {};
    var rest_guess = [];
    for (var i=0; i<secret.length; i++) {
        if (secret[i]===guess[i]) A++;
        else {
            if (map[secret[i]]===undefined) map[secret[i]]=1;
            else map[secret[i]]++;
            rest_guess.push(guess[i]);
        }
    }
    for (i=0; i<rest_guess.length; i++) {
        if (map[rest_guess[i]]!==undefined && map[rest_guess[i]]>0) {
            B++;
            map[rest_guess[i]]--;
        } 
    }
    return A.toString()+"A"+B.toString()+"B";
    
};
