// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(employeeName, employeeId, employeeEmail);
        this.number = officeNumber;
    }
    getName() {
        console.log(`Managers name is ${this.name}`);

    }

    getId() {
        console.log(`Managers ID is ${this.id}`);
    }

    getEmail() {
        console.log(`Managers email is ${this.email}`);
    }

    getRole() {
        console.log(`Company role is ${this.role}`);
        //overridden to return manager
    }

    getNumber() {
        console.log(`Managers office number is ${this.number}`);
    }
}


