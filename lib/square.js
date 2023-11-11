// Square
class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}
class square extends Shapes {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}
module.exports = square