const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole() {
        return "Intern"
    }
    //this is in place of getSchool method, so that this can be used for all employees
    getSpecial() {
        return `School: ${this.school}`
    }
}

module.exports = Intern