//Circle
class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}
class circle extends Shapes {
    render() {
        return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
}
module.exports = circle;