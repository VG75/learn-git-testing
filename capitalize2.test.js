const capitalize = require('./example2')

test('Capitalize a a simple string', () => {
    expect(capitalize("vageesha")).toMatch("Vageesha");
});

test('Return an empty string', () => {
    expect(capitalize("")).toMatch("");
});

test('Format or capitalize a random string', () => {
    expect(capitalize("vaGeeSha")).toMatch("Vageesha");
});