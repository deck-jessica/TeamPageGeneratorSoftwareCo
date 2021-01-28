// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, gitHub, id, email) {
        super("engineer", id, email);
        this.name = name;
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;