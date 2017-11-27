/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    var num = 0;
    var esig = 1;
    var sig = 1;
    var temp = "";
    var x = 0;
    for (var i=0; i<=equation.length; i++) {
        if (i>0 && (equation[i]==="+" || equation[i]==="-" || equation[i]==="=" || i === equation.length)) {
            if (temp[temp.length-1]==="x") {
                temp = temp.substring(0,temp.length-1);
                if (temp==="") temp = "1";
                else if (temp==="-") temp = "-1";
                x += temp-0;
            } else {
                if (temp!=="-") num += temp-0;
            }
            if (equation[i]==="=") {esig = -1; temp = "-"; continue;}
            if (equation[i]==="+") sig = esig;
            else if (equation[i]==="-") sig = -1*esig;
            temp = sig===1 ? "" : "-";
        } else {
            temp += equation[i];
        }
    }
    if (x===0) {
        return num===0 ? "Infinite solutions" : "No solution";
    } else var res = num*-1/x;
    return "x="+res;
};
