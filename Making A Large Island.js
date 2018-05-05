/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    let GG = new Array(grid.length);
    let check = new Array(grid.length);
    for (let i=0; i<GG.length; i++) {
        GG[i] = new Array(grid[i].length).fill(0);
        check[i] = new Array(grid[i].length).fill(false);
    }
    let temp = 0;
    let count = 0;
    let x = [];
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (check[i][j]) continue;
            if (grid[i][j]===1) {
                temp = 0;
                count++;
                helper(i,j);
                helper2(i,j);
                x.push(temp);
            }
        }
    }
    var pool = [];
    var max = 0;
    var res = 0;
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (check[i][j]) continue;
            pool = [];
            max = 0;
            if (i+1<grid.length && GG[i+1][j]!==0 && pool.indexOf(GG[i+1][j]===-1)) pool.push(GG[i+1][j]);
            if (j+1<grid[0].length && GG[i][j+1]!==0 && pool.indexOf(GG[i][j+1]===-1)) pool.push(GG[i][j+1]); 
            if (i-1>=0 && GG[i-1][j]!==0 && pool.indexOf(GG[i-1][j]===-1)) pool.push(GG[i-1][j]);
            if (j-1>=0 && GG[i][j-1]!==0 && pool.indexOf(GG[i][j-1]===-1)) pool.push(GG[i][j-1]);
            pool.sort(sortNumber);
            for (let r=0; r<pool.length; r++) {
                if (r===0) max += x[pool[r]-1];
                else if (pool[r]!==pool[r-1]) max += x[pool[r]-1];
            }
            res = res>max+1 ? res : max+1;
        }
    }
    //return GG
    return res===0? temp : res;
    
    function sortNumber(a,b) {return a-b;}
    function helper(p, q) {
        if (check[p][q] || grid[p][q]===0) return;
        check[p][q]=true;
        temp++;
        if (p+1<grid.length) helper(p+1,q);
        if (p-1>=0) helper(p-1,q);
        if (q+1<grid[0].length) helper(p,q+1);
        if (q-1>=0) helper(p,q-1);
    }
    
    function helper2(p, q) {
        if (GG[p][q]!==0 || !check[p][q]) return;
        GG[p][q]=count;
        
        if (p+1<grid.length) helper2(p+1,q);
        if (p-1>=0) helper2(p-1,q);
        if (q+1<grid[0].length) helper2(p,q+1);
        if (q-1>=0) helper2(p,q-1);
    }
};
