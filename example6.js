function analyzeArray(list) {

    let length = list.length;

    let average = list.reduce((total, curr) => {
        return total + curr
    }, 0) / length;

    let min = list.reduce((prev, curr) => {
        prev = prev > curr ? curr : prev;
        return prev;
    }, Infinity);

    let max = list.reduce((prev, curr) => {
        prev = prev < curr ? curr : prev;
        return prev;
    }, -Infinity);

    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray;