// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const inquirer = require ('Inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
// const team = [{
    const managerTeam = []; const engineerTeam = []; const internTeam = []
// }]


const promptUser = () => {    
      return inquirer.prompt(teamQuestions)
}

const buildFolks = (teamData) => {
        if (teamData.role === "Manager") {
        const manager = new Manager (teamData.name, teamData.employeeID, teamData.email, teamData.officeNumber);
        managerTeam.push(manager);
        console.log(managerTeam)
    } else

    if (teamData.role === "Engineer") {
        const engineer = new Engineer (teamData.name, teamData.employeeID, teamData.email, teamData.engineerGithub);
        engineerTeam.push(engineer);
        console.log(engineerTeam)
    } else 

    if (teamData.role === "Intern") {
        const intern = new Intern (teamData.name, teamData.employeeID, teamData.email, teamData.school);
        internTeam.push(intern);
        console.log(internTeam)
    };


    if (teamData.addOrEnd === "Add another team member") {
        return promptUser();   
    }
}



const teamQuestions = [
    {
        type: 'list',
        name: 'role',
        message: "Confirm team member's role.",
        choices: ['Manager', new inquirer.Separator(), 'Engineer', new inquirer.Separator(), 'Intern']
    },
    {
    type: 'input',
    name: 'name',
    message: "What is the team member's name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team member's name.");
        return false;
      }
    }
  },
{
type: 'input',
name: 'employeeID',
message: "Enter team member's employee ID.",
validate: employeeID => {
    if (employeeID) {
      return true;
    } else {
      console.log("Please enter team member's employee ID.");
      return false;
    }
  }
},
{
type: 'input',
name: 'email',
message: "Enter team member's email address.",
validate: email => {
    if (email) {
      return true;
    } else {
      console.log('Please enter a valid email address.');
      return false;
    }
  }
},

//conditional questions depending on team member's role
{
type: 'input',
name: 'officeNumber',
message: "Enter team member's office number.",
validate: officeNumber => {
    if (officeNumber) {
      return true;
    } else {
      console.log('Please enter a valid office number.');
      return false;
    }
  },
when: ({role}) => {
    if (role === 'Manager') {return true;}
    else {return false}}
},
{
    type: 'input',
    name: 'engineerGithub',
    message: "Enter Engineer's Github Username.",
    validate: engineerGithub => {
        if (engineerGithub) {
          return true;
        } else {
          console.log('Please enter a username.');
          return false;
        }
      },
    when: ({role}) => {
        if (role === 'Engineer') {return true;}
        else {return false}}
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter team member's school.",
        validate: school => {
            if (school) {
              return true;
            } else {
              console.log('Please enter school name.');
              return false;
            }
          },
        when: ({role}) => {
            if (role === 'Intern') {return true;}
            else {return false}}
    },
{
type: 'list',
name: 'addOrEnd',
message: 'Would you like to enter another team member or are you finished building your team?',
choices: ['Add another team member', new inquirer.Separator(), 'Finished building team'],
}
]




function init () {
    console.log(`
    =================
    Let's start with your team manager.
    =================
    `);
    
    promptUser()
    .then(buildFolks)

}
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

init()