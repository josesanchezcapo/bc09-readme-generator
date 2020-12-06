function readmeGenerator(userResponses) {

let readmeFormat = `
    
# My Project Name: ${userResponses.projectTitle}
![INQUIRER NMP PACKAGE](./img/inquirer.png)
## Project Description
${userResponses.projectDescription}
## Table of Content
* [Installation](#installation) 
* [Usage](#Usage)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)   

## Installation
${userResponses.installationSteps}
## Usage
${userResponses.usageInformation}
## Tests
${userResponses.howTo}
## Questions
For any questions, please reach out to me:
    Find me in GitHub: ${userResponses.question1} | [My GitHub Profile](${userResponses.question2}) | [Email Me](${userResponses.question3})
## Lincense
* ${userResponses.licenseType}    
    
`

    // return readme format
    return readmeFormat;
    

}

module.exports = readmeGenerator;