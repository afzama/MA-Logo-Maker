// Triangle.test
const Triangle = require('./Triangle'); // Import your Triangle class

describe('Triangle Class', () => {
    test('render() returns SVG string with the correct color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});