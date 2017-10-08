////// below is the copy of the concise solution ///////////

/**
 * @param {string} s
 * @return {boolean}
 */

//this problem hits DP, but because we will be checking only for 1 failure, we will be using if-else condition
var validPalindrome = function(s) {
    var i = 0;
    var j = s.length-1;
    while(i < j){
        if(s[i] != s[j])
            return isPalindrome(i+1,j,s) || isPalindrome(i,j-1,s);
        i++;j--;
    }
    return true;
}

function isPalindrome(i,j,s){
    while(i < j){
        if(s[i] != s[j])//this would be second occurence
            return false;
        i++;j--;
    }
    return true;
}

////// below is mine solution /////////////////////

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    if (s.length<=2) return true;
    var l = 0, r = s.length-1;
    var count = 0;
    var temp1 = "";
    var temp2 = "";
    while(l<r) {
        if (s[l] !== s[r]) {
            count++;
            if (s[l] === s[r-1]) {
                temp1 = s.slice(l, r);
            }
            if (s[l+1] === s[r]) {
                temp2 = s.slice(l+1, r+1);
            }
            if (s[l] === s[r-1] && s[l+1] === s[r]) {count--; break;}
            if (s[l] !== s[r-1] && s[l+1] !== s[r]) return false;
        }
        if (count===1) break;
        l++;
        r--;
        
    }
   
    l=0;
    r=temp1.length-1;
    while (l<r) {
        if (temp1[l] !== temp1[r]) {
            count++;
            break;
        }
        l++;
        r--;
    }
    
    l=0;
    r=temp2.length-1;
    while (l<r) {
        if (temp2[l] !== temp2[r]) {
            count++;
            break;
        }
        l++;
        r--;
    }
    
    if (count<=1) return true;
    else return false;
};
