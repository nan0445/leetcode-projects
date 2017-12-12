/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let star = false;
    var res = [];
    var t_star = "";
    for (let i=0; i<source.length; i++) {
        var temp = star ? "" : source[i][0];
        for (let j=1; j<source[i].length; j++) {
            if (source[i][j-1]==="/") {
                if (source[i][j]==="/" && !star) {
                    temp = temp.slice(0,temp.length-1);
                    break;
                }
                else if (source[i][j]==="*") {
                    temp = temp.slice(0,temp.length-1);
                    if (!star) {t_star = temp.slice(); j++}
                    star = true;
                    
                }
                else {
                    if (!star) temp=temp.concat(source[i][j]);
                }
            }
            else if (source[i][j-1]==="*" && source[i][j]==="/") {
                if (!star) temp=temp.concat(source[i][j]);
                else {temp = t_star; 
                    if (j+1<source[i].length) temp = temp.concat(source[i][j+1]); 
                    j++;}
                star = false;
            }
            else {
                if (!star) temp=temp.concat(source[i][j]);
            }
        }
        if (temp.length>0 && !star) res.push(temp);
    }
    return res;
};
