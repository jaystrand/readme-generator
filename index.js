// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "What is the name of this project?"
    },
    {
        name: 'description',
        type: "input",
        message: "What is the purpose of this Readme?"
    },
    {
        name: 'contents',
        type: "input",
        message: "Enter the Table of Contents of your project:"
    },
    {
        name: 'installation',
        type: "input",
        message: "Provide instructions on how to install:"
    },
    {
        name: 'usage',
        type: "input",
        message: "What is your project used for?"
    },
    {
        name: 'license',
        type: "input",
        message: "What is the license you're using?",
        choices: ["MIT", "GPL", "Apache", "BSD", "None"],
    },
    {
        name: 'contributors',
        type: "input",
        message: "Who are your contributors?"
    },
    {
        name: 'test',
        type: "input",
        message: "Enter test instructons:"
    },
    {
        name: 'screenshot',
        type: "input",
        message: "Enter a link to a screenshot of your project:"
    },
    {
        name: 'questions',
        type: "input",
        message: "Enter an email address where you can be reached for more questions:"
    },
    {
        name: 'github',
        type: "input",
        message: "Enter a link to your Github profile:"
    }

]).then((answers) => {
    console.log(answers);
    const userTemplate = writeToFile(answers);
    writeFile(userTemplate);
}).catch((err) => {
    console.log(err)
});



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing file: ", err);
        } else {
            console.log("Readme created!");
        }
    });
}
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const userTemplate = writeToFile(answers);
        writeFile(userTemplate);
    }).catch((err) => {
        console.log(err)
    });
}
// Function call to initialize app
init();


