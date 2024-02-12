function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];

    // Concatenate all three collections into a single array.
    const mergedArray = collection1.concat(collection2, collection3);

    // Process the merged array until it is empty.
    while (mergedArray.length > 0) {
        const minValue = findMinValue(mergedArray);
        result.push(minValue);
        mergedArray.splice(mergedArray.indexOf(minValue), 1);
    }

    // Return the final sorted array.
    return result;
}

// This function finds the minimum value in an array.
function findMinValue(arr: number[]): number {
    let min = arr[0]; // Assume the first element is the minimum.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update the minimum if a smaller value is found.
        }
    }
    // Return the minimum value.
    return min;
}

export default merge;
