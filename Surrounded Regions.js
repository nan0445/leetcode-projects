/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length<=2) return;
    if (board[0].length<=2) return;
    var h = board.length, w = board[0].length;
    let flag = true;
    let visited = new Array(h);
    let temp = [], res = [];
    for (let i=0; i<h; i++) visited[i] = new Array(w).fill(false);
    for (let i=1; i<h-1; i++) {
        for (let j=1; j<w-1; j++) {
            temp = [];
            flag = true;
            if (board[i][j]==="O") helper(i,j,board,h,w);
            if (flag) res.push(temp);
        }
    }
    if (res.length<1) return;
    for (let i=0; i<res.length; i++) {
        for (let j=0; j<res[i].length; j+=2) {
            board[res[i][j]][res[i][j+1]] = "X";
        }
    }
    //board[0][0] = res[0][4];
    function helper(m,n,board,h,w) {
        if (m<0 || n<0 || m>=h || n>=w) return;
        if (m===0 || m===h-1 || n===0 || n===w-1) {
            if (board[m][n]==="O") {flag = false; return;}
            else return;
        }
        if (board[m][n]==="X") return;
        if (visited[m][n]===true) return;
        visited[m][n] = true;
        temp.push(m);
        temp.push(n);
        helper(m-1,n,board,h,w);
        helper(m+1,n,board,h,w);
        helper(m,n-1,board,h,w);
        helper(m,n+1,board,h,w);
    }
};
