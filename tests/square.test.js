//Sqaure.test
const square = require('../lib/square'); // Import your square class

describe('square Class', () => {
    test('render() returns SVG string with the correct color', () => {
        const shape = new square();
        shape.setColor("red");
        const actual = shape.render();
        console.log(actual);
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
    });
});