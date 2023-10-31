const inquirer = require('inquirer');
const fs = require('fs');

function generateLogo(logoCharacters, textColor, selectedShape, logoColor) {
    const shapes = {
        circle: `<circle r="125" cx="125" cy="125" fill="${logoColor}"></circle>`,
        rectangle: `<rect x="75" y="75" width="100" height="100" rx="25" ry="25" fill="${logoColor}"></rect>`,
        triangle: `<polygon points="125, 25 75, 175 175, 175" fill="${logoColor}"></polygon>`,
        star: `<polygon points="125,25 150,175 50,75 175,75 75,175" fill="${logoColor}"></polygon>`,
    };

    const logoShape = shapes[selectedShape]; // Assign the selected shape to the logoShape variable
    const logoSVG = `
        <svg width="250" height="250">
            <text x="20" y="50" fill="${textColor}">${logoCharacters}</text>
            ${logoShape}
        </svg>
    `;
    return logoSVG;
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoCharacters',
            message: 'Enter text for the logo (Note, must not be more than 3 characters).'
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Choose your logo text color',
            choices: ['red', 'blue', 'green', 'yellow', 'purple'],
        },
        {
            type: 'list',
            name: 'selectedShape',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'square', 'triangle', 'rectangle', 'star'],
        },
        {
            type: 'list',
            name: 'logoColor',
            message: 'Enter a shape color.',
            choices: ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'black'],
        }
    ])
    .then((answers) => {
        const { logoCharacters, textColor, selectedShape, logoColor } = answers;
        const newLogo = generateLogo(logoCharacters, textColor, selectedShape, logoColor);

        // Output the generated logo to the console
        console.log(newLogo);

        // Save the logo to an SVG file (optional)
        fs.writeFileSync('generated_logo.svg', newLogo);
    });
