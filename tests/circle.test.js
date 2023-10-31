//Circle.test
const Circle = require('./Circle'); // Import your Circle class

describe('Circle Class', () => {
    test('render() returns SVG string with the correct color', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});