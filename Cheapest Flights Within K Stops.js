/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let map = {};
    for (let i=0; i<flights.length; i++) {
        if (map[flights[i][0]]===undefined) map[flights[i][0]]=[[flights[i][1],flights[i][2]]];
        else map[flights[i][0]].push([flights[i][1],flights[i][2]]);
    }
    let count = 0;
    let temp = 0;
    let res = Number.MAX_VALUE;
    helper(count,flights,src,dst,K);
    return res===Number.MAX_VALUE ? -1 : res;
    function helper(count, flights, node, dst, K){
        if (count>K) return;
        if (map[node]===undefined) return;
        for (let i=0; i<map[node].length; i++) {
            temp+=map[node][i][1];
            if (temp>=res) {temp-=map[node][i][1]; continue;}
            if (map[node][i][0]===dst) {res = Math.min(res,temp); temp-=map[node][i][1]; continue;}
            count++;
            helper(count,flights,map[node][i][0],dst,K);
            count--;
            temp-=map[node][i][1];
        }
    }
};
