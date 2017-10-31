/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    if (Math.min(C, G)-Math.max(A, E)<0 || Math.min(D, H)-Math.max(B, F)<0) var com = 0;
    else var com = (Math.min(C, G)-Math.max(A, E))*(Math.min(D, H)-Math.max(B, F));
    var area1 = (C-A)*(D-B);
    var area2 = (G-E)*(H-F);
    return area1 + area2 - com;
};
