// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown");
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [[
    {
        type: 'input',
        name: 'name',
        message: 'title'
    }
]];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}


inquirer.prompt(questions).then(response => {
    const markdownContent = generateMarkdown(response)
    fs.writeToFile('README.md', markdownContent)
})  

// Function call to initialize app
init();
