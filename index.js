/*
## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

*/

// required pakage

const inquirer = require('inquirer');

// readme questions

const readmeQuestions= [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'GitHub-Profile',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid answer is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'readmeRepository',
        default: 'Generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Project Title?",
        name: 'projectTitle',
        default: 'Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter a description for your project.",
        name: 'projectDescription',
        default: 'Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please provide the steps required to install your project.",
        name: 'installationSteps'
    },
    {
        type: 'input',
        message: "Please provide instructions and examples of your project.",
        name: 'usageInformation'
    },
    {
        type: 'input',
        message: "Please provide description on how to run them.",
        name: 'howTo'
    },
    {
        type: 'list',
        message: "Please choose the type of  license that best fit your project.",
        choices: ['MIT License','GNU AGPLv3', 'GNU LGPLv3','Apache License 2.0' ],
        name: 'licenseType'
    }
];


// select license image base on objecte selection

// generate readme bases on responses

