/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let temp = [], res = [];
    temp = [0];
    for (let i=0; i<graph[0].length; i++) {
        temp.push(graph[0][i]);
        helper(graph,graph[0][i]);
        temp.pop();
    }
    return res;
    function helper(graph,k) {
        if (k===graph.length-1) {
            res.push(temp.slice());
            return;
        }
        for (let p=0; p<graph[k].length; p++) {
            temp.push(graph[k][p]);
            helper(graph,graph[k][p]);
            temp.pop();
        }
    }
};
