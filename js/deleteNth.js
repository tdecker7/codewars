function deleteNth(array, nth) {
    const occurences = {};
    array.forEach((number, index) => {
        if (occurences[number] >= 0) {
            occurences[number]++;
            if (occurences[number] > nth) {
                delete array[number];
                occurences[number]--;
            }
        } else {
            occurences[number] = 1;
        }
    });
    return array;
}

console.log(deleteNth([1,1,1,1], 2));
console.log(deleteNth([1,2,3,1,2,1,2,1], 3));
console.log(deleteNth([20, 37, 20, 21], 1));