/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    var temp = new Array(edges.length).fill(0);
    for (var i=0; i<edges.length; i++) {
        temp[edges[i][0]-1]++;
        temp[edges[i][1]-1]++;
    }
    var i=0;
    while (temp.indexOf(1)!==-1) {
        if (i===edges.length) i=0;
        if (temp[edges[i][0]-1]===1 || temp[edges[i][1]-1]===1) {
            temp[edges[i][0]-1]--;
            temp[edges[i][1]-1]--;
            edges.splice(i,1);
            i--;
        }
        i++;
    }
    return edges[edges.length-1];
};

////////////////////////////////////////////////////////////////
//// though I do not understand, it seems to use the loop//////
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
    const nums = Array(2000).fill(-1);
    
    const find = (i) => {
        if (nums[i] === -1) {
            return i;
        }
        return find(nums[i]);
    }
    
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const x = find(edge[0]);
        const y = find(edge[1]);
        
        if (x === y) {
            return edge;
        }
        
        nums[x] = y;
    }
    
    return [];
};
