/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var temp = [];
    for (let i=0; i<tokens.length; i++) {
        if (tokens[i]!=="+" && tokens[i]!=="-" && tokens[i]!=="*" && tokens[i]!=="/") temp.push(tokens[i]-0);
        else if (tokens[i]==="+") {
            var x2 = temp.pop();
            var x1 = temp.pop();
            temp.push(x1+x2);
        } else if (tokens[i]==="-") {
            var x2 = temp.pop();
            var x1 = temp.pop();
            temp.push(x1-x2);
        } else if (tokens[i]==="*") {
            var x2 = temp.pop();
            var x1 = temp.pop();
            temp.push(x1*x2);
        } else if (tokens[i]==="/") {
            var x2 = temp.pop();
            var x1= temp.pop();
            if (x1*x2<0) temp.push(-Math.floor(-x1/x2));
            else temp.push(Math.floor(x1/x2));
        }
    }
    return temp.pop();
};
