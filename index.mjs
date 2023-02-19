import inquirer from 'inquirer';
import fs from "fs/promises";


let title = "README Templete";
let {description, Installation, Usage, lincense} = await inquirer
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
        name: 'License',
        message: 'Choose your Lincese',
        choices: ['IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License'],
    }
   
])


 let readmeText = `${title}
 # Project Description
${description}
# Table of Contents
# Installation  
${Installation}
# Usage
${Usage}
# Lincense
${generateLincense(lincense)}`;

function generateLincense (lincense) {
    if (lincense === "IBM Public License Version 1.0") {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    else if (lincense === "ISC License (ISC)") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    else (lincense === "The MIT License"); {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
}
fs.writeFile("README.md", readmeText);