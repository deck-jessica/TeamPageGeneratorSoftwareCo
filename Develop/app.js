const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "templates");
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

const employeeRole = [
        {
        type: "list",
        name: "role",
        message: "Please select the role of the team member you want to add: ",
        choices: ["Manager", "Engineer", "Intern", "No team members left to add"],
        }, ];
const managerQuest = [
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your manager's employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "office",
        }, ];

const engineerQuest = [
            {
                type: "input",
                message: "What is the engineer\'s name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the engineer\'s ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the engineer\'s email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the engineer\'s Github name?",
                name: "github",
            }, ];

const internQuest = [
            {
                type: "input",
                message: "What is the intern\'s name?",
                name: "name",
                },
            {
                type: "input",
                message: "What is the intern\'s ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the intern\'s email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the intern\'s university?",
                name: "school",
            }, ];            
    
    generateTeamMembers();
    
function generateTeamMembers () {
    inquirer.prompt(employeeRole)
    .then(function (response) {
        return response;
    }).then(function(response) {
        if (response.role === 'Manager') {
            inquirer.prompt(managerQuest)
            .then((response) => {
                const manager = new Manager (
                    response.name,
                    response.id,
                    response.email,
                    response.office
                );
                teamMembers.push(manager);
                generateTeamMembers();
            });
        } else if (response.role === 'Engineer') {
            inquirer.prompt(engineerQuest)
            .then((response) => {
                const engineer = new Engineer (
                    response.name,
                    response.id,
                    response.email,
                    response.github
                );
                teamMembers.push(engineer);
                generateTeamMembers();
        });
    } else if (response.role === 'Intern') {
        inquirer.prompt(internQuest)
            .then((response) => {
                const intern = new intern (
                    response.name,
                    response.id,
                    response.email,
                    response.university
                );
                teamMembers.push(intern);
                generateTeamMembers();
        });
    } else {
        const team = render(teamMembers);
        fs.writeFile(outputPath, team  => {
            console.log('Your team has been created in the team.html file.')
        });
            
        }
    });
    }