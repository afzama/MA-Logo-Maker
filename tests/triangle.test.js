// Triangle.test
const triangle = require('../lib/triangle'); // Import your Triangle class

describe('triangle Class', () => {
    test('render() returns SVG string with the correct color', () => {
        const shape = new triangle();
        shape.setColor("green");
        const actual = shape.render();
        console.log(actual);
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });
});