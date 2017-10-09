/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    var N = target.length;
    var dp = [];
    dp[0] = 0;
    for (i=1; i<1<<N; i++) dp[i] = -1;
    
    for(i=0; i<1<<N; i++) {
        if (dp[i]===-1) continue;
        for (var j in stickers) {
            var now = i;
            for (var k in stickers[j].split('')) {
                for (p=0; p<N; p++) {
                    if ((now>>p) & 1 === 1) continue;
                    if (stickers[j][k] === target[p]) {
                        now |= 1<<p;
                        
                        break;
                    }
                }
                
            }
            if (dp[now] === -1 || dp[now] > dp[i] + 1) dp[now] = dp[i] + 1;
            
        }
    }
    
    return dp[(1<<N)-1];
};
