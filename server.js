const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const svgPath = path.join(__dirname, 'generated_logo.svg');
    const svg = fs.readFileSync(svgPath, 'utf8');

    res.set('Content-Type', 'image/svg+xml');
    res.send(svg);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
