/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    var temp1 = [];
    var flag = false;
    var numR = 0;
    var numD = 0;
    var i = 0;
    senate = senate.split("");
    while (!(flag && (numR===0||numD===0))) {
        if (i===senate.length) {
            i=0;
            flag = true;
        }
        if (temp1.length===0 || temp1[temp1.length-1]===senate[i]) {
            temp1.push(senate[i]);
            if (senate[i]==="R" && !flag) numR++;
            else if (senate[i]==="D" && !flag) numD++;
        } else if (temp1.length!==0 && temp1[temp1.length-1]!==senate[i]) {
            if (senate[i]==="R" && flag) numR--;
            else if (senate[i]==="D" && flag) numD--;
            senate.splice(i,1);
            i--;
            temp1.pop();
        }
        i++;
    }
    return numR===0 ? "Dire" : "Radiant";
};
