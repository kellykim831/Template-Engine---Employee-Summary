// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./employee");

class Intern extends Employee {
  constructor(schoolName) {
    super(employeeName, employeeId, employeeEmail);
    this.school = schoolName;
  }
  getName() {
    console.log(`Interns name is ${this.name}`);
  
    }
    
    getId() {
        console.log(`Interns ID is ${this.id}`);
    }
    
    getEmail() {
        console.log(`Interns email is ${this.email}`);
    }
    
    getRole() {
        console.log(`Company role is ${this.role}`);
        //overridden to return intern
    }

    getSchool() {
        console.log(`Interns school name is ${this.school}`);
    }
}

