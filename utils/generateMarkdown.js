// utils/generateMarkdown.js

export default function generateMarkdown(data) {
 
const badgeURL = 'https://img.shields.io/badge/license-' + encodeURIComponent(data.license) + '-blue';
  return `
![badge](${badgeURL})

# ${data.title}

## Description
${data.description}

## Table of Contents
- ###[Description](#description)
- ###[Installation](#installation)
- ###[Usage](#usage)
- ###[License](#license)
- ###[Contributors](#contributors)
- ###[Tests](#tests)
- ###[Questions](#questions)

${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions
For any questions, please contact me at: ${data.questions}.
Github Profile: ${data.github}.
  `;
}

