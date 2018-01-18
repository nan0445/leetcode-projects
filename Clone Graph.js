/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    let map = {};
    return helper(graph);
    function helper(node) {
        if (node===null) return null;
        if (map[node.label]!==undefined) return map[node.label];
        var clone = new UndirectedGraphNode(node.label);
        map[clone.label]=clone;
        for (let i=0; i<node.neighbors.length; i++) {
            clone.neighbors.push(helper(node.neighbors[i]));
        }
        return clone;
    }
};
