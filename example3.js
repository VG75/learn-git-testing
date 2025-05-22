function reverse(word) {
    word = word.trim();
    return word.split("").reverse().join("").toLowerCase();

}

module.exports = reverse;