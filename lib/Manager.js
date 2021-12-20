const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      //calls parent constructor
      super(name, id, email);  
  
      this.officeNumber = officeNumber
    }
    getRole(){
      return `Manager`
    }
}

module.exports = Manager

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
