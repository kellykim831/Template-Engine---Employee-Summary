// TODO: Write code to define and export the Employee class

class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
      this.name = employeeName;
      this.id = employeeId;
      this.email = employeeEmail;
    }
  
    getName() {
    console.log(`Employees name is ${this.name}`);
  
    }
    
    getId() {
        console.log(`Employees ID is ${this.id}`);
    }
    
    getEmail() {
        console.log(`Employees email is ${this.id}`);
    }
    
    getRole() {
        console.log(`Company position is ${this.role}`);
        //returns employee
    }
  }


  module.exports = Employee;
