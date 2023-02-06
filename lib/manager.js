const Employee = require('./Employee');

class Manager extends Employee {
	constructor(officeNum) {
		officeNum = this.officeNum;
	}

	getOfficeNum() {
		return this.officeNum;
	}

	getRole() {
		return 'Manager';
	}
}
module.exports = Manager;
