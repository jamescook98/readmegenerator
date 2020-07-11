const fs = require('fs');
const inquirer = require("inquirer");

async function userInputs() {
    try {
        const userInput = await inquirer.prompt([
            {
                type: "input",
                message: "Project title:",
                name: "title"
            },
            {
                type: "input",
                message: "Badge link:",
                name: "badge"
            },
            {
                type: "input",
                message: "Project description:",
                name: "description"
            },
            {
                type: "input",
                message: "Installation:",
                name: "installation"
            },
            {
                type: "input",
                message: "Author:",
                name: "author"
            },
            {
                type: "input",
                message: "Usage:",
                name: "usage"
            },
            {
                type: "list",
                message: "License:",
                name: "license",
                choices: [
                    "MIT",
                    "Apache license 2.0",
                    "ISC",
                    "Mozilla Public License 2.0"
                ]
            },
            {
                type: "input",
                message: "Contributors:",
                name: "contributors"
            },
            {
                type: "input",
                message: "Tests:",
                name: "tests"
            },
            {
                type: "input",
                message: "Questions:",
                name: "questions"
            },
            {
                type: "input",
                message: "GitHub username:",
                name: "username"
            },
            {
                type: "input",
                message: "GitHub email:",
                name: "email"
            }

        ]);
        return writeToFile("README.md", `
# ${userInput.title}
${userInput.badge}
# Description
${userInput.description}
# Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [Contact](#Contact)
# Installation
${userInput.installation}
# Author
${userInput.author}
# Usage
${userInput.usage}
# License
${userInput.license}
# Contributors
${userInput.contributors}
# Tests
${userInput.tests}
# Questions
${userInput.questions}
# Contact
[![github profile picture](https://avatars.githubusercontent.com/${userInput.username}?s=100)](mailto:${userInput.email})
    `
        );        
    }
    catch (err) {
        console.log(err);
    }
}
userInputs();

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}