// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./employee");

class Engineer extends Employee {
    constructor(gitHubUserName) {
        super(employeeName, employeeId, employeeEmail);
        this.gitHub = gitHubUserName;
    }
    getName() {
        console.log(`Engineer name is ${this.name}`);

    }

    getId() {
        console.log(`Engineer ID is ${this.id}`);
    }

    getEmail() {
        console.log(`Engineer email is ${this.email}`);

    }

    getGithub() {
        console.log(`Engineer Github Username is ${this.gitHub}`);
    }

    getRole() {
        console.log(`Company role is ${this.role}`);
        //overridden to return engineer
    }
}
