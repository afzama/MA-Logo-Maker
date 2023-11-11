//Circle.test
const circle = require('../lib/circle'); // Import your Circle class

describe('circle Class', () => {
    test('render() returns SVG string with the correct color', () => {
        const shape = new circle();
        shape.setColor("blue");
        const actual = shape.render();
        console.log(actual);
        expect(actual).toEqual('<circle cx="150" cy="150" r="100" fill="blue" />');
    });
});