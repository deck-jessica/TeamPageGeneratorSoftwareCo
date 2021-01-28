// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, university, id, email) {
        super("intern", id, email);
        this.name = name;
        this.university = university;
    }
}

module.exports = Intern;