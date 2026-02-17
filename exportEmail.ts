// This script generates an email based on the new design

const fs = require('fs');

const emailTemplate = `<!DOCTYPE html>\n<html lang='en'>\n<head>\n    <meta charset='UTF-8'>\n    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n    <title>Email Template</title>\n</head>\n<body>\n    <h1>Welcome to Our service</h1>\n    <p>This is the new email design.</p>\n</body>\n</html>`;

function generateEmail(filename) {
    fs.writeFile(filename, emailTemplate, (err) => {
        if (err) throw err;
        console.log(`Email has been generated and saved as ${filename}`);
    });
}

generateEmail('email-new-design.html');
