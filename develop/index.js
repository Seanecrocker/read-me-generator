// // TODO: Include packages needed for this application
// const template = require("./template");
// const fs = require('fs')
// const inquirer = require('inquirer')
// const createFile = require("./newFile")
// // TODO: Create an array of questions for user input
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'title'
//     }
// ]).then((data) => {
//     const mdTemplate = template(data);
//     console.log(mdTemplate);
//     createFile('READMe.md', mdTemplate);
// });



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // inquirer.prompt(questions).then(response => {
// //     const markdownContent = generateMarkdown(response)
// //     fs.writeFile('README.md', markdownContent)
// // })  
// // TODO: Create a function to initialize app
// function init() {}




// // Function call to initialize app
// init();
// TODO: Include packages needed for this application
const createFile = require("./createFile")
const fs = require('fs');
const inquirer = require('inquirer');
const template = require("./generateMarkdown");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter title for README:'
    }
]).then((data) => {
    const mdTemplate = template(data);
    console.log(mdTemplate);
    createFile('README.md', mdTemplate); // Corrected filename to 'README.md'
});

// TODO: Create a function to write README file
// If you intend to use writeToFile, implement its functionality here

// TODO: Create a function to initialize app
// If you have initialization logic, implement it here

// Function call to initialize app
// If you have initialization logic, call init() here
