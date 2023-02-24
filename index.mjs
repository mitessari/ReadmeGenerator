import inquirer from 'inquirer';
import fs from "fs/promises";
import { error } from 'console';


// let tableContents = `
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Questions](#questions)`;
//let questionsSection = `If you have any questions please do not hesitate to contact me on ${answers.github} or via ${answers.email}. `

let {description, Installation, Usage, license, contributing, title, email, github} = await inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: "Project title?",
    },

    {
        type: 'input',
        name: 'description',
        message: "Project description?",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "Installation instructions?", 
    },
    {
        type: 'input',
        name: 'Usage',
        message: "Project usage?",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your License',
        choices: ['IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contribution info?",
       
    },
    {
        type: 'input',
        name: 'email',
        message: "For questions (email)?",
    },

    {
        type: 'input',
        name: 'github',
        message: "For questions (github)?",
    }

])

email = `<a href="mailto:${email}">Email</a>`;
github =  `<a href="https://github.com/${github}">GitHub</a>`;

//function generateMarkdown(answers) {
  let Questions = [
 `# ${title}
  ## Project Description
   ${description}
  ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Questions](#questions)
  
   ## Installation  
   ${Installation}
   ## Usage
   ${Usage}
   ## License
   ${generateLincense(license)}
   ## Contributing
   ${contributing}
   ## Questions
   If you have any questions please do not hesitate to contact me on ${github} or via ${email}. `
 //}
  ];
 
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

fs.writeFile("README.md", Questions);
//generateMarkdown(answers);
//  let readmeText = `${title}
//  ## Project Description
// ${description}
// ## Table of Contents
// ${tableContents}
// ## Installation  
// ${Installation}
// ## Usage
// ${Usage}
// ## License
// ${generateLincense(license)}
// ## Contributing
// ${contributing}
// ## Questions
// ${questions}`;



// function runQuery(){
// return inquirer.prompt()
// .then((answers) => {
//     generateMarkdown(answers)
//    function(err){
//        if(err) {
//            console.log("Could not save the file", err);
//        } else {
//         console.log('Success! New README.md file genereted inside the current folder')
//        }
//    })
// })
//         .catch((error) => {
//             console.log(error);
//         })

// }

// runQuery()

