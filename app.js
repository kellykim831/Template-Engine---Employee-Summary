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
let employeeId = 1;
let team = [];

function managerPrompt() {
    return inquirer.prompt([
        {
            message: "Please build your team."
        },
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
            message: "What is your office number?"
        },
    ])

            .then(function(response) {
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

                team.push(manager)
            }

        {
            type: "input",
            name: "teamMember",
            message: "Which type of team member would you like to add?"
        },
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email address?"
        },
        {
            type: "input",
            name: "gitHubUsername",
            message: "What is your Github Username?"
        },
        
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your interns's email address?"
        },
        {
            type: "input",
            name: "schoolName",
            message: "What is the name of the school that your intern attends?"
        },
    ]);
}

//the answers typed inside the integrated terminal will be plugged into the main.html file.
promptUser()
    .then(function (answers) {
        const main = mainHtml(answers);

        return writeFileAsync("main.html", main);
    })
    .then(function () {
        console.log("Successfully wrote to main.html");
    })
    .catch(function (err) {
        console.log(err);
    });



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function render(){

};


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

var outputPath; 

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
