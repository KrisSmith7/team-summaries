const Employee = require ('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
    super(name, id, email)
    this.school = school
    }
}

module.exports = Intern
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated