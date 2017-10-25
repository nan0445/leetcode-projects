/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
   
    var v1=version1.split('.');
    var v2=version2.split('.');
    var l1=v1.length, l2=v2.length;
    var ml = Math.min(l1, l2);
    for (i=0; i<ml; i++) {
        if ((v1[i]-0)>(v2[i]-0)) return 1;
        else if ((v1[i]-0)<(v2[i]-0)) return -1;
    }
    if (l1!==l2) {
        if (l1>l2) {var e1=(v1.slice(l2).join('')-0); return e1>0 ? 1 : 0;}
        else {var e2=(v2.slice(l1).join('')-0); return e2>0 ? -1 : 0;}
    }
    return 0;
};
