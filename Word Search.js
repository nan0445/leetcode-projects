/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let visited = new Array(board.length);
    for (let i=0; i<board.length; i++) visited[i] = new Array(board[0].length).fill(false);
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            if ((board[i][j]===word[0]) && helper(board, word, 0, i, j)) return true;
        }
    }
    return false;
    
    function helper(board, word, k, m, n) {
        if (k===word.length) return true;
        if (m>=0 && m<board.length && n>=0 && n<board[0].length && board[m][n]===word[k] && !visited[m][n]) {
            visited[m][n] = true;
            if (helper(board, word, k+1, m+1, n) || helper(board, word, k+1, m-1, n) || helper(board, word, k+1, m, n+1) || helper(board, word, k+1, m, n-1)) return true;
            visited[m][n] = false;
        } 
        return false;
    }
};
