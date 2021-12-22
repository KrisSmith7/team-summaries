const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //calls parent constructor
    super(name, id, email);

    this.officeNumber = officeNumber
  }

  getRole() {
    return "Manager"
  }

  getSpecial() {
    return `Office Number: ${this.officeNumber}`
  }
}

module.exports = Manager
