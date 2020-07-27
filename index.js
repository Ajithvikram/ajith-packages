module.exports = (array, size) => {
    const newArray = [];
    const arraySize = Math.round(array.length / size);
    while (array.length) {
        const chunk = array.splice(0, arraySize);
        newArray.push(chunk);
    }
    return newArray;
}
