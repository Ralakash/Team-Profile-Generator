const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(github) {
		github = this.github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}
module.exports = Engineer;
