const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk')

function generateLogo(logoCharacters, textColor, selectedShape, logoColor) {
    const shapes = {
        circle: `<circle r="125" cx="125" cy="125" fill="${logoColor}"></circle>`,
        triangle: `<polygon points="125, 25 75, 175 175, 175" fill="${logoColor}"></polygon>`,
        square: `<rect x="50" y="50" width="200" height="200" fill="${logoColor}" />`,
    };

    const logoShape = shapes[selectedShape]; // Assign the selected shape to the logoShape variable
    const logoSVG = `
        <svg width="250" height="250">
            ${logoShape}
            <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="24">${logoCharacters}</text>
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
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'list',
            name: 'logoColor',
            message: 'Enter a shape color.',
            choices: ['red', 'blue', 'green'],
        }
    ])
    .then((answers) => {
        const { logoCharacters, textColor, selectedShape, logoColor } = answers;
        const newLogo = generateLogo(logoCharacters, textColor, selectedShape, logoColor);

        // Output the generated logo to the console with chalk styling
        console.log(chalk.keyword(textColor)(newLogo));

        // Save the logo to an SVG file 
        fs.writeFileSync('generated_logo.svg', newLogo);
    });
