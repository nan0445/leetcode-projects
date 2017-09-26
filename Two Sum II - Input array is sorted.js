/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left=0;
    let right=numbers.length-1;
    let sum= numbers[left]+numbers[right];
    while(sum!==target){
        if(sum>target){
            right--
        }else {
            left++
        }
        sum= numbers[left]+numbers[right];
    }
    return [left+1, right+1];
};

/////////////////////////////////////
/// below is very slow//////////////

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    var k=numbers.length;
    for (i=0; i<k; i++) {
        for (j=k-1; j>i; j--) {
            if (numbers[i]+numbers[j]<target) break;
            if (numbers[i]+numbers[j]===target) return [i+1, j+1];
        }
    }
};
