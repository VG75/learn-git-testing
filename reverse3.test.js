const reverse = require('./example3');

test('Word Reversal with all lower case', () => {
    expect(reverse("Vageesha")).toMatch("ahseegav");
});


test('Sentense Reversal with all lower case', () => {
    expect(reverse("Vageesha G")).toMatch("g ahseegav");
});


test('Sentense Reversal with all lower case with extraa white spaces', () => {
    expect(reverse("    Vageesha G"  )).toMatch("g ahseegav");
});
