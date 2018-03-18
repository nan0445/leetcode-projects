/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let temp = [];
    let flag = true;
    var res = [];
    let check = new Array(graph.length).fill(false);
    for (let i=0; i<graph.length; i++) {
        if (check[i]) continue;
        temp = [];
        flag = true;
        helper(graph,i);
        //res.push(temp);
        //if (flag) res.push(i);
    }
    for (let i=0; i<check.length; i++) {
        if (check[i]) res.push(i);
    }
    return res;
    function helper(graph,p) {
        if (check[p]) return;
        if (temp.indexOf(p)!==-1) {
            flag = false;
            return;
        }
        if (!flag) return;
        temp.push(p);
        for (let j=0; j<graph[p].length; j++) {
            if (check[graph[p][j]]) continue;
            helper(graph,graph[p][j]);
        }
        var x = temp.pop();
        if (flag) check[x] = true;
    }
};
