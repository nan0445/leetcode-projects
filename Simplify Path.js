/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var temp = path.split('/');
    for (i=0; i<temp.length; i++) {
        if (temp[i]===""||temp[i]===".") {temp.splice(i,1); i--;}
        if (temp[i]==="..") {
            temp.splice(i,1);
            i--;
            if (temp[i]) {temp.splice(i,1); i--;}
        }
    }
    return "/" + temp.join('/');
    
};
