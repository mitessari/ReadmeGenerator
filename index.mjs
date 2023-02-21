import inquirer from 'inquirer';
import fs from "fs/promises";


let title = "# README Templete";
let tableContents = `
* [Installation](#installation);
* [Usage](#usage);
* [License](#license);`

let {description, Installation, Usage, license,} = await inquirer
.prompt([
    {
        type: 'input',
        name: 'description',
        message: "What's your description?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "How to install your project?", 
    },
    {
        type: 'input',
        name: 'Usage',
        message: "show useful examples of how a project can be used.",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your License',
        choices: ['IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License'],
    }
   
])


 let readmeText = `${title}
 ## Project Description
${description}
## Table of Contents
${tableContents}
## Installation  
${Installation}
## Usage
${Usage}
## License
${generateLincense(license)}`;

function generateLincense (license) {
    if (license === "IBM Public License Version 1.0") {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    else if (license === "ISC License (ISC)") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else if (license === "The MIT License"); {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
}
fs.writeFile("README.md", readmeText);