//Import of required packages for the application including inquirer, fs, generateMarkdown and axios
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");

// Array of questions to be prompted to the user inclduing inputs and lists
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

//Inquierer to show user questions generated before and usage of axios to retrieve information from the github profile
inquirer.prompt(questions).then((answers) => {
  //Function to retrieve information from github
  axios
    .get("https://api.github.com/users/" + answers.github)
    .then(function (response) {
      const ghAvatar = response.data.avatar_url;
      const ghLink = response.data.html_url;
      //Calling the function writeToFile with the generateMarkdown function as parameter (function that returns the string for the readMe)
      writeToFile(
        "GeneratedReadMe.md",
        generateMarkdown(answers, ghAvatar, ghLink)
      );
    })
    .catch(function (error) {
      //Catch in case there's an error both in the asynchronous functions or in the writeFile.
      console.log(error);
    });
});

//Function that generates and writes over the readMe file given the response of the generateMarkdown function
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("ReadMe generated correctly!");
  });
}

//Function to initialize app
function init() {}

//Function call to initialize app
init();
