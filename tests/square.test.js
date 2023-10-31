//Sqaure.test
const square = require('./square'); // Import your square class

describe('square Class', () => {
    test('render() returns SVG string with the correct color', () => {
        const shape = new square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});