// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, github) {
        super(employeeName, employeeId, employeeEmail);
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;