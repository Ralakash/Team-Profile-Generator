const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./utils/htmlGenerator');

var teamRoster = [];

const menuQuestions = () => {
	// Build a menu
	//   prompt to add an engineer or intern at the end or to finish building team.
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'menu',
				choices: ['Add Engineer', 'Add Intern', 'Finish Team'],
				message: 'Please select an option:',
			},
		])
		.then((answer) => {
			console.log(answer);
			switch (answer.menu) {
				case 'Add Engineer':
					console.log('you selected engineer');
					inquirer
						.prompt(buildEngineer)
						.then((answers) => {
							let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
							console.log(engineer);
							teamRoster.push(engineer);
						})
						.then(() => {
							menuQuestions();
						});
					break;
				case 'Add Intern':
					inquirer
						.prompt(buildIntern)
						.then((answers) => {
							let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
							teamRoster.push(intern);
						})
						.then(() => {
							menuQuestions();
						});
					break;
				case 'Finish Team':
					console.log(teamRoster);
					generateHTML(teamRoster);
					break;
				default:
					console.log('you suck');
			}
		});
};

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

const createNewTeam = () => {
	inquirer
		.prompt(buildManager)
		.then((answers) => {
			let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
			teamRoster.push(manager);
			console.log(manager.getRole());
			console.log(teamRoster);
		})
		.then(() => {
			menuQuestions();
		});
};

function init() {
	createNewTeam();
}

init();
