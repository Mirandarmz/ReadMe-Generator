function renderLicenseBadge(license) {
  switch(license){
    case "BSD 3-Clause":
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
    case "Apache License 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    case "GNU General Public License":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';
    case "MIT License":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case "Mozilla Public License":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
    case "None":
      return "";
  }

}
// TODO: Create a function that returns a license badge and license link based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  switch(license){
    case "BSD 3-Clause":
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case "Apache License 2.0":
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0';
    case "GNU General Public License":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
    case "MIT License":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "Mozilla Public License":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case "None":
      return "No license used in the proyect";
  }

}

console.log(renderLicense("BSD 3-Clause"));

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description 
  ${data.description}

## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 

## Installation
  ${data.install}

## Usage
  ${data.usage}

## Contributors
  ${data.contributors}

## Licence
  ${renderLicense(data.license)}

## Test
  ${data.tests}

## Github

## Contact info
If you have any more questions, please contact me via email:
[mailto](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
