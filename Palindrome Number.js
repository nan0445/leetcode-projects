var isPalindrome = function(x) {
    var x_rev = 0; 
    var x_temp = x;
    if (x < 0 || (x%10 === 0 && x !== 0)){
        return false;
    }
    else{
        while (x_temp > x_rev){
            x_rev = x_rev*10 + x_temp%10;
            if (x_rev === x_temp){
                return true;
            }
            x_temp = Math.floor(x_temp/10);
        }
        if (x_rev === x_temp){
            return true;
        }
        else{
            return false;
        }
    }
    
};
