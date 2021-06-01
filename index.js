// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");


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
    message:
      "Enter the names of the contributors, separated by a comma (Ex. Miranda Ramírez,Felipe Lozano)",
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
      "None",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "How would you run tests on this project?",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email",
  },
];

inquirer.prompt(questions).then((answers) => {
        axios
          .get("https://api.github.com/users/" + answers.github)
          .then(function (response) {
            const ghAvatar=response.data.avatar_url;
            const ghLink=response.data.url;
            writeToFile("GeneratedReadMe.md", generateMarkdown(answers,ghAvatar,ghLink));
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("ReadMe generated correctly!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
