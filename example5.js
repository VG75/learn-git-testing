function caesar(word, skip) {
    const wordArray = word.split("");

    const lowerCaseLetters = [];
    const upperCaseLetters = [];
    const otherLetters = [];

    wordArray.forEach((char, index) => {
        const code = char.charCodeAt(0);
        const obj = { value: char, index };

        if (code >= 97 && code <= 122) {
            lowerCaseLetters.push(obj);
        } else if (code >= 65 && code <= 90) {
            upperCaseLetters.push(obj);
        } else {
            otherLetters.push(obj);
        }
    });

    const shiftedLower = lowerCaseLetters.map(({ value, index }) => {
        const newChar = String.fromCharCode(
            ((value.charCodeAt(0) - 97 + skip) % 26) + 97
        );
        return { value: newChar, index };
    });

    const shiftedUpper = upperCaseLetters.map(({ value, index }) => {
        const newChar = String.fromCharCode(
            ((value.charCodeAt(0) - 65 + skip) % 26) + 65
        );
        return { value: newChar, index };
    });

    // No change for others
    const combined = [...shiftedLower, ...shiftedUpper, ...otherLetters];

    // Sort by original index to reconstruct original order
    combined.sort((a, b) => a.index - b.index);

    // Extract characters and join
    const result = combined.map(obj => obj.value).join("");

    return result;
}

module.exports = caesar;