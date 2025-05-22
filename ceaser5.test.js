const caesar = require('./example5')

test('Basic Test', () => {
    expect(caesar('xyz', 3)).toMatch('abc');
});

test('Medium Test', () => {
    expect(caesar('HeLLo', 3)).toMatch('KhOOr');
});

test('Basic Test', () => {
    expect(caesar('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});