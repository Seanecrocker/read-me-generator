const createFile = require("./createFile")
const fs = require('fs');
const inquirer = require('inquirer');
const template = require("./generateMarkdown");


inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter title for README:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description for README:'
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Enter table of contents:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Create installation message:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this application used:'
        },
        {
            type: 'list',
            name: 'license', 
            message: 'Select license',
            choices: ['Apache', 'BSD', 'MT',]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this application:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you test this application:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter github link:'
        }
    ]).then((data) => {
    const mdTemplate = template(data);
    console.log(mdTemplate);
    createFile('README.md', mdTemplate); 
});