/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var m = image.length, n = image[0].length;
    var flag = new Array(m);
    for(var i=0; i<m; i++) flag[i] = new Array(n).fill(true);
    var temp = image[sr][sc];
    
    function helper(image, sr, sc, newColor, flag, m, n, temp) {
        if (sr<0 || sr>=m || sc<0 || sc>=n || image[sr][sc] !== temp) return;
        if (flag[sr][sc]) {
            flag[sr][sc]=false;
            image[sr][sc] = newColor;
            helper(image, sr-1, sc, newColor, flag, m, n, temp);
            helper(image, sr, sc-1, newColor, flag, m, n, temp);
            helper(image, sr+1, sc, newColor, flag, m, n, temp);
            helper(image, sr, sc+1, newColor, flag, m, n, temp);
        }
    }
    
    helper(image, sr, sc, newColor, flag, m, n, temp);
    return image;
};
