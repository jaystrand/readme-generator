// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
inquirer.prompt([
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
        type: "list",
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
        message: "Enter test instructons:",
    },
    {
        name: 'screenshot',
        type: 'input',
        message: 'Enter a link to a screenshot of your project:',
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Enter an email address where you can be reached for more questions:',
    },
    {
        name: 'github',
        type: "input",
        message: "Enter a link to your Github profile:",
    },

]).then((answers) => {

}
);

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function writeToFile(data) {
    return generateMarkdown(data);
}

function writeFile(userTemplate) {
    fs.writeFile('README.md', userTemplate, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('File created');
    });
}

function init() {
    // Function call to write README file
    //writeToFile('README.md', generateMarkdown(data));
}


// Function call to initialize app
init();


