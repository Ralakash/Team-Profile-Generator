const Employee = require('./Employee');

class Intern extends Employee {
	constructor(school) {
		school = this.school;
	}
	getSchool() {
		return this.school;
	}
	getRole() {
		return 'Intern';
	}
}
module.exports = Intern;
