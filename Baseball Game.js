/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    
    var score = [];
    var sum = 0;
    for (i=0; i<ops.length; i++) {
        
        if ((ops[i]-0)>=-30000 && ops[i]-0 <= 30000) {
            score.push(ops[i]-0);
            sum += score[i];
        }
    
        switch (ops[i]) {
            case ("C"):
                sum -= score[i-1];
                i -=2;
                ops.splice(i+1, 2);
                score.splice(i+1, 1);
                break;
            case ("D"):
                score.push((score[i-1]-0)*2);
                sum += score[i];
                break;
            case ("+"):
                score.push((score[i-1]-0)+(score[i-2]-0));
                sum += score[i];
            
        } 
    
    }
    
    return sum;
};
