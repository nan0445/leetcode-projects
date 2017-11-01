/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    var i=click[0], j=click[1];
    var h=board.length, w=board[0].length;
    if (board[i][j]==="M") {
        board[i][j]="X";
        return board;
    } else {
        helper(i,j);
        return board;
    }
    
    function helper(i,j) {
        if (i<0 || j<0 || i>=h || j>=w || board[i][j]!=="E") return;
        var count=0;
        for(var p=i-1; p<=i+1; p++) {
            for (var k=j-1; k<=j+1; k++) {
                if (p>=0 && k>=0 && p<h && k<w) {
                    if (board[p][k]==="M") count++;
                }
            }
        }
        if (count===0) {
            board[i][j]="B";
            for(var x=i-1; x<=i+1; x++) {
                for (var y=j-1; y<=j+1; y++) {
                    helper(x,y);
                }
            }
        } else board[i][j]=count.toString();
        
    }
};
