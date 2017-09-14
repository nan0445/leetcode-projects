var reverse = function(x) {
    var x_string=x.toString();
    var x_reverse_string = new String();
    
    if (x_string[0] === "-"){
        x_reverse_string = "-";
        for (i=x_string.length-1; i>0; i--) {
            x_reverse_string += x_string[i];
        }
    }
    else{
        for (i=x_string.length-1; i>-1; i--) {
            x_reverse_string += x_string[i];
        }
    }
    if (parseInt(x_reverse_string) >= Math.pow(2,31)*-1 && parseInt(x_reverse_string) < Math.pow(2,31)-1){
       return parseInt(x_reverse_string);
        
    }
    else{
       return 0;
    }
};
