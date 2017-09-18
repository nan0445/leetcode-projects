var plusOne = function(digits) {
  
    for (i=digits.length-1; i>=0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits
        }
        digits[i] = 0;
        
    }
    return [1].concat(digits);
    
};
