// Import necessary packages
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of this project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'What is the purpose of this Readme?',
    },
    {
        name: 'contents',
        type: 'input',
        message: 'Enter the Table of Contents of your project:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Provide instructions on how to install:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is your project used for?',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What is the license you are using?',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None'],
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Who are your contributors?',
    },
    {
        name: 'test',
        type: 'input',
        message: 'Enter test instructions:',
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Enter an email address where you can be reached for more questions:',
    },
    {
        name: 'github',
        type: 'input',
        message: 'Enter a link to your Github profile:',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README.md file created successfully.');
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate markdown content from the user answers
            const markdownContent = generateMarkdown(answers);
            // Write the content to a README.md file
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error('Error prompting user:', error);
        });
}

// Function call to initialize app
init();
