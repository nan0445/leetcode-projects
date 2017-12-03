/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    var l=0, r=arr.length-1;
    while (l<r) {
        var mid = l + Math.floor((r-l)/2);
        if (arr[mid]===x) {
            l = r = mid;
            break;
        } else if (arr[mid]>x) {
            r = mid;
        } else if (arr[mid]<x) {
            l = mid + 1;
        }
    }
    l--;
    var res = [];
    var count = 0;
    while (count<k) {
        if (l<0) {
            res.push(arr[r]);
            count++;
            r++;
            continue;
        }
        if (r>=arr.length) {
            res.push(arr[l]);
            count++;
            l--;
            continue;
        }
        if (l>=0) {
            if ((arr[r]-x)>=(x-arr[l])) {
                res.push(arr[l]);
                count++;
                l--;
            } else {
                res.push(arr[r]);
                count++;
                r++;
            }
        }
    }
    function sortNumber(a,b) {return a-b;}
    return res.sort(sortNumber);
};

/////////////////////////////////////////////////////////
/// very smart method ////////////////////////////////////
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0, right = arr.length - k;
    while (left < right) {
        let mid = left + parseInt((right - left) / 2);
        if (x - arr[mid] > arr[mid + k] - x) left = mid + 1;
        else right = mid;
    }
    return arr.slice(left, left + k);
}
