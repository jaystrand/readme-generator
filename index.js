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
function writeToFile(answers) {
    return (`<!DOCTYPE html>
        <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>${answers.title} Readme</title>
             </head>
             <body>
                # ${answers.title} ![Static Badge](https://img.shields.io/badge/License-${answers.license}-blue)

                # Readme Generator

                ## Description
                ${answers.description}
                This study guide was created to provide basic information to new students learning how to code for the first time. This information helped me as a beginner coder, and I thoughht this information could help other first time coders. 

                I learned that the 3 different areas of coding, HTML, CSS, and JavaScript play an important role in creating a webpage. Think of each as a differnt step in building a house. HTML would be the building of the frame of a house, CSS would be the decoration and styling of the house, and JavaScript would be the function of the house.


                ## Table of Contents
                ### Installation
                ### License
                ### Usage
                ### Contributing
                ### Test
                ### Screenshot
                ### Questions


                ## Installation
               

                ## Usage

                This guide was created for students new to coding to use as an initial guide. This guide contains notes about HTML, CSS, and JavaScript. You will be able to see JavaScript running by opeing the DevTools console by right clicking on the page and choosing "Install" at the bottom of the list. The console will also randomly choose a topic to for the user to study first.

                ## Guidelines

                NA

                ## Test Instructions

                ##Screenshot

                ## License

                MIT License
                Copyright (c) 2024 Hydro8188

    
             </body>
        </html>`
    )
}



// TODO: Create a function to initialize app
function writeFile(htmlString) {
    fs.writeFile('readme.html', htmlString, (err) => {
        if (err) {
            console.error("Error writing file: ", err);
        } else {
            console.log("readme.html created!");
        }
    });
}

// Function call to initialize app
init();


// return `# ${answers.title} ![Static Badge](https://img.shields.io/badge/License-${answers.license}-blue)


// # Readme Generator

// ## Description
// ${answers.description}

// ## Table of Contents

// ## Installation

// N/A

// ## Usage

// This guide was created for students new to coding to use as an initial guide. This guide contains notes about HTML, CSS, and JavaScript. You will be able to see JavaScript running by opeing the DevTools console by right clicking on the page and choosing "Install" at the bottom of the list. The console will also randomly choose a topic to for the user to study first.

// ## Guidelines

// N/A

// ## Test Instructions

// ##Screenshot

// ## License

// MIT License
// Copyright (c) 2024 Hydro8188

//     }`
// }
