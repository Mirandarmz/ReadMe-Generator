// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of the proyect.",
  },
  {
    type: "input",
    name: "install",
    message: "Are there any installation requirements for your proyect?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide a description for the usage of your proyect",
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter the names of the contributors, separated by a comma (Ex. Miranda Ramírez,Felipe Lozano)",
  },
  {
      type: "list",
      name: "license",
      message: "If its the case, select the proyect's from the list",
      choices: [
          "BSD 3-Clause",
          "Apache License 2.0",
          "GNU General Public License",
          "MIT License",
          "Mozilla Public License",
          "Other",
          "None",
        ],
    },
    {
      type: "input",
      name: "tests",
      message: "How would you run tests on this project?",
    },
];

inquirer.prompt(questions).then(answers => {
    writeToFile("GeneratedReadMe.md",generateMarkdown(answers));
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log(err);
        }
            console.log("ReadMe generated correctly!");
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
