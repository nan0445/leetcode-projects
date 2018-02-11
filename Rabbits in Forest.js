/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    if (answers.length===0) return 0;
    if (answers.length===1) return answers[0]+1;
    function sortNumber(a,b) {return a-b;}
    answers.sort(sortNumber);
    var res = answers[0]+1;
    var temp = 0;
    var count = 1;
    for (let i=1; i<answers.length; i++) {
        temp = answers[i]+1;
        if (answers[i]===answers[i-1]) {
            count++;
            if (count>temp) {
                res += answers[i]+1;
                count = 1;
            } else {
                continue;
            }
            
        } else {
            count = 1;
            res += answers[i]+1;
        }
        
    }
    return res;
};
