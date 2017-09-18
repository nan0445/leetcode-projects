var lengthOfLastWord = function(s) {
    
    var temps = s.trim();
    return temps.length-temps.lastIndexOf(" ")-1;
    
};


//or doing the below things:

var lengthOfLastWord = function(s) {
    
    if (s === "" || s === null || s === " ") {return 0;}
    var spaceFlag = false;
    var spaceIndex = new Array();
    for (i=s.length-1; i>-1; i--) {
        if (s.charAt(i) != " ") {
            spaceFlag = true;
            spaceIndex.push(i);
        }
        if (spaceFlag === true && (s.charAt(i) === " " || i === 0)) {
            return spaceIndex[0]-spaceIndex[spaceIndex.length-1]+1;
        }
    }
    if (spaceFlag === false) {return 0;}
    
};
