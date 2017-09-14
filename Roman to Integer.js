var romanToInt = function(s) {
    var x = new Array();
    var y = 0;
    for (i=0; i<s.length; i++){
        switch(s[i]){
            case "M":
                x[i]=1000;
                break;
            case "D":
                x[i]=500;
                break;
            case "C":
                x[i]=100;
                break;
            case "L":
                x[i]=50;
                break;
            case "X":
                x[i]=10;
                break;
            case "V":
                x[i]=5;
                break;
            case "I":
                x[i]=1;
                break;
        } 
        if (i>0){
            if (x[i-1] >= x[i]){
                y += x[i-1];
            }
            else{
                y -= x[i-1];
            }
        }
    }
    return y += x[x.length-1];
};
