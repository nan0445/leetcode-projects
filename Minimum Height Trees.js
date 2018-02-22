/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (edges.length===0) return [0];
    let map = {};
    for (let i=0; i<edges.length; i++) {
        if (map[edges[i][0]]===undefined) map[edges[i][0]]=[];
        map[edges[i][0]].push(edges[i][1]);
        if (map[edges[i][1]]===undefined) map[edges[i][1]]=[];
        map[edges[i][1]].push(edges[i][0]);
    }
    let temp = [];
    let count = 0;
    let res = [];
    let max = 0;
    temp.push(edges[0][0]);
    helper(edges,edges[0][0],-1);
    
    temp = [];
    temp.push(res[res.length-1]);
    count = 0;
    max = 0;
    helper(edges,res[res.length-1],-1);
    if (res.length%2!==0) return [res[(res.length-1)/2]];
    else return [res[res.length/2-1], res[res.length/2]];
    
    function helper(edges, start, ex) {
        var t = map[start].slice();
        if (t.indexOf(ex)!==-1) t.splice(t.indexOf(ex),1);
        if (count>=max) {
            res = temp.slice();
            max = count;
        }
        if (t.length===0) return;
        for (let i=0; i<t.length; i++) {
            count++;
            temp.push(t[i]);
            helper(edges,t[i],start);
            temp.pop();
            count--;
        }
    }
};
