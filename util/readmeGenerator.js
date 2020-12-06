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
    Find me in GitHub: ${userResponses.username} | [My GitHub Profile](${userResponses.githubProfile}) | [Email Me](${userResponses.email})
## Lincense
* ${userResponses.licenseType}    
    
`

    // return readme format
    return readmeFormat;
    

}

module.exports = readmeGenerator;