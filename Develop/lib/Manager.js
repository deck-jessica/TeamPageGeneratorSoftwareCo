// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, office, id, email) {
        super("manager", id, email);
        this.name = name;
        this.office = office;
    
    }
}

module.exports = Manager;