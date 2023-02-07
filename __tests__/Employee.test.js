const Employee = require('../lib/Employee');

test('Generate an employee test', () => {
	const e = new Employee();
	expect(typeof e).toBe('object');
});

test('Can set name test', () => {
	const name = 'Shawn';
	const e = new Employee(name);
	expect(e.name).toBe(name);
});

test('Can set id test', () => {
	const testValue = 1;
	const e = new Employee('test', testValue);
	expect(e.id).toBe(testValue);
});

test('Can set email test', () => {
	const testValue = 'test@test.com';
	const e = new Employee('test', 1, testValue);
	expect(e.email).toBe(testValue);
});

test('Can get name using getName()', () => {
	const testValue = 'Shawn';
	const e = new Employee(testValue);
	expect(e.getName()).toBe(testValue);
});

test('Can get id using getId()', () => {
	const testValue = 1;
	const e = new Employee('test', testValue);
	expect(e.getId()).toBe(testValue);
});

test('Can get email using getEmail()', () => {
	const testValue = 'test@test.com';
	const e = new Employee('test', 1, testValue);
	expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return 'Employee'", () => {
	const testValue = 'Employee';
	const e = new Employee('test', 1, 'test@test.com');
	expect(e.getRole()).toBe(testValue);
});
