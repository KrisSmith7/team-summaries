const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, githubName) {
        super (name, id, email)
        this.githubName = githubName}
        
        getRole () {
            return "Engineer"
        }
        getSpecial() {
            return `Github: <a href="https://www.github.com/${this.githubName}" target="_blank">${this.githubName}`
            // return this.githubName
        }

}

module.exports = Engineer


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
