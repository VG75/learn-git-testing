const calculator = require('./example4')

test('Add 2 numbers 2, 3', () => {
    expect(calculator.add(2,3)).toEqual(5);
});

test('Subtract 2 numbers 2, 3', () => {
    expect(calculator.subtract(2,3)).toEqual(-1);
});

test('Multiply 2 numbers 2.002, 3.0025', () => {
    expect(calculator.multiply(2.002,3.0025)).toBeCloseTo(6.01);
});

test('Divide 2 numbers 2.14, 3.47', () => {
    expect(calculator.divide(2,3)).toBeCloseTo(0.6666);
});

test('Divide With zero', () => {
    expect(calculator.divide(2,0)).toEqual('Inf');
});