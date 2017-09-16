var countAndSay = function(n) {
    if (n <= 0) {return "";}
    var x = "1";
    var temp = "";
    
    for (i=0; i<n-1; i++) {
        for (j=0; j<x.length; j++) {
            k = 1;
            while ((j+1)<x.length && x[j] === x[j+1]) {
                k++;
                j++;
                
            }
           temp = temp.concat(k.toString()).concat(x[j].toString());
           
        }
        x = temp;
        temp = "";
    }
    return x;
};
