const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//saves array of the team members
var team = [];
//manager prompt questions
function managerPrompts() {
    console.log("Let's start building your team!");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        },
    ])

        .then(function (response) {
            let managerName = response.managerName;
            let managerId = response.managerId;
            let managerEmail = response.managerEmail;
            let officeNumber = response.officeNumber;
            let manager = new Manager(
                managerName,
                managerId,
                managerEmail,
                officeNumber
            );

            team.push(manager);
            console.log("Let's add your team members!");

            employeePrompts();

        });
}
//employee prompt questions
function employeePrompts() {
    inquirer.prompt([

        {
            type: "list",
            name: "employeeRole",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            name: "employeeName",
            message: "What is the employee's name?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the employee's email address?",
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the employee's id number?",
        }
    ])

        .then(function (response) {
            let employeeRole = response.employeeRole;
            let employeeName = response.employeeName;
            let employeeEmail = response.employeeEmail;
            let employeeId = response.employeeId;

            if (employeeRole === "Engineer") {
                inquirer.prompt([

                    {
                        type: "input",
                        name: "gitHubUsername",
                        message: "What is your engineer's Github username?"
                    },
                    {
                        type: "list",
                        name: "shouldAddAnotherEmployee",
                        message: "Would you like to add another team member?",
                        choices: ["Yes", "No"],
                    }

                ])
                    .then(function (response) {
                        let gitHubUsername = response.gitHubUsername;
                        let engineer = new Engineer(
                            employeeName,
                            employeeId,
                            employeeEmail,
                            gitHubUsername
                        );

                        team.push(engineer);

                        if (response.shouldAddAnotherEmployee === "Yes") {
                            employeePrompts();
                        } else {
                            generateTeam();
                            return;
                        }
                    });
            } else {


                return inquirer.prompt([
                    {
                        type: "input",
                        name: "schoolName",
                        message: "What is the name of the school that your intern attends?"
                    },
                    {
                        type: "list",
                        name: "shouldAddAnotherEmployee",
                        message: "Would you like to add another team member?",
                        choices: ["Yes", "No"],
                    }
                ])
                    .then(function (response) {
                        let schoolName = response.schoolName;
                        let intern = new Intern(
                            employeeName,
                            employeeId,
                            employeeEmail,
                            schoolName
                        );
                        team.push(intern);

                        if (response.otherEmployees === "Yes") {
                            employeePrompts();
                        } else {
                            generateTeam();
                            return;
                        }
                    });
            }
        });
}
//add the render function here!
function generateTeam() {
    const output = render(team);
    fs.writeFile("./lib/output/team.html", output, "utf8", function (err) {
        console.log("success!")
    })
    console.log(output);
    console.log(team)
    console.log("DONE")
}

managerPrompts();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
