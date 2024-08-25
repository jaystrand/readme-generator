// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs, { writeFile } from 'fs';
import generateMarkdown from './utils/generateMarkdown';
import path from 'path';

// TODO: Create an array of questions for user input
inquirer.prompt ([
{
    name: "title",
    type: "input",
    message: "What is the name of this project?"
},
{
    name: 'description',
    type: "input",
    message: "What is the purpose of this page?"
},
{
    name: 'questions',
    type: "input",
    message: "Enter an email address wheere you can be reached for more questions:"
},
{
    name: 'github',
    type: "input",
    message: "Enter a link to your Github profile:"
},
{
    name: 'screenshot',
    type: "input",
    message: "Enter a link to a screenshot of your project:"
}

]).then((answers) => {
    const userTemplate = fillTemplate(answers);
    writeFile(userTemplate);

});

function fillTemplate(answers) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${answers.title} Readme</title>
            </head>
            <body>
                <h1>Readme</h1>
                <section>
                    <h2>${answers.title}</h2>
                    <p>Description: ${answers.description}</p>
                    <img src="${answers.screenshot}" alt="screenshot of project">
                </section>
                <section>
                    <h2>Links:</h2>
                    <a style="display: block;" href="${answers.questions}">Questions</a>
                    <a style="display: block;" href="${answers.github}">GitHub</a>
                </section>
            </body>
            </html>`
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
