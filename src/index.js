/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
    var arr = preferences;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        var y = arr[x-1];
        var z = arr[y-1];
        if (z === i+1 && y!== i+1) {count++;}
    }

    return count/3;
};
