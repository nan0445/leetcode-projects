var longestCommonPrefix = function(strs) {
    if (strs[0] === "" || strs === null || strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    for (i=0; i<strs[0].length; i++) {
        for (j=0; j<strs.length; j++) {
            if (strs[0].charAt(i) !== strs[j].charAt(i)) {
                return strs[0].substring(0,i);
            }
            
        }
    }
    return strs[0].substring(0,i);
};
