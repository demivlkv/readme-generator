// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (REQUIRED)',
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
        message: 'Provide a description of your project. (REQUIRED)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation intructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions & examples for use. Option to add screenshots will be shown upon completion of this set of questions. (REQUIRED)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter any instructions for use!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide guidelines for contributing to this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions on how to test the application.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license to use for your project. (CHOOSE 1)',
        choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'No License', 'Skip']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username. (REQUIRED)',
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
        message: 'Enter your e-mail address. (REQUIRED)',
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

// prompt questions to add screenshot(s) into README
const promptScreenshot = readmeData => {
	if (!readmeData.screenshots) {
		readmeData.screenshots = [];
	}
	console.log(`
===============================
Add a New Screenshot (OPTIONAL)
===============================
	`);
	return inquirer.prompt([
		{
			type: 'input',
			name: 'img',
			message: 'Create an `assets/images` folder & upload your screenshot file in it. Then provide the image file name. (OPTIONAL)',
		},
        {
            type: 'confirm',
            name: 'confirmAddScreenshot',
            message: 'Would you like to add another screenshot?',
            default: false
        }
    ])
    .then(screenshotData => {
        readmeData.screenshots.push(screenshotData);
        if (screenshotData.confirmAddScreenshot) {
            return promptScreenshot(readmeData);
        } else {
            return readmeData;
        }
    });
};

// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Success! A new README.md file has been created!'
            });
        });
    });
};

// initialize app
const init = () => {
    return inquirer.prompt(questions);
};

// function call to initialize app
init()
    .then(readmeData => {
    return promptScreenshot(readmeData);
    })
    .then(data => {
        console.log(data);
        return generateMarkdown(data);
    })
    .then(markdown => {
        return writeToFile(markdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err)
    });