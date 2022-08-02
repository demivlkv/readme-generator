// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation intructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots if needed.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test the application.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license to use for your project.',
        choices: ['Apache', 'MIT', 'GNU', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your e-mail address.');
                return false;
            }
        }
    }
];

// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeToFile('./dist/generated-README.md', fileName, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README.md created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
