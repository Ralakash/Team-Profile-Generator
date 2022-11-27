const inquirer = require('inquirer');
const fs = require('fs');
const htmlGenerator = require('./utils/htmlGenerator');

const menuQuestions = [
  // Build a menu
  //   prompt to add an engineer or intern at the end or to finish building team.
  {
    type: 'list',
    name: 'menu',
    choices: ['Add Engineer', 'Add Intern', 'Finish Team'],
    message: 'Please select an option:',
  },
];

const buildManager = [
  // WHEN I start the application
  // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
  {
    type: 'input',
    name: 'name',
    message: "Please enter the Manager's Name:",
  },
  {
    type: 'input',
    name: 'id',
    message: "Please input the Manager's employee ID:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the Manager's email address:",
  },
  {
    type: 'input',
    name: 'officeNum',
    message: "Please input the Manager's office number:",
  },
];
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const buildEngineer = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the Engineer's name",
  },
  {
    type: 'input',
    name: 'id',
    message: "Please input the Engineer's employee ID:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the Engineer's email address:",
  },
  {
    type: 'input',
    name: 'github',
    message: "Please input the Engineer's Github username:",
  },
];

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const buildIntern = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter the Intern's name",
  },
  {
    type: 'input',
    name: 'id',
    message: "Please input the Intern's employee ID:",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter the Intern's email address:",
  },
  {
    type: 'input',
    name: 'school',
    message: "Please input the Intern's school name:",
  },
];

const menuFunction = () => {
  var teamRoster = [];
  if (teamRoster === []) {
    inquirer.prompt(buildManager).then((answers) => {
      let manager = {
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNum,
      };
      teamRoster.push(manager);
      console.log(teamRoster);
    });
  } else {
    switch (answer) {
      case 'Add Engineer':
        inquirer.prompt(buildEngineer).then((answers) => {});
        break;
      case 'Add Intern':
        inquirer.prompt(buildIntern).then((answers) => {});
        break;
      case 'Finish Team':
    }
  }
};

function init() {
  menuFunction();
}

init();
