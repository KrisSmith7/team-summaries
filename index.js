//variables and required packages for application
const inquirer = require ('Inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const team = [];
module.exports = team;
const { writeFile, createHTML, showData } = require('./lib/util/generateHTML');

//list of questions to collect user input
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
default: 'Add another team member',
}
]

const promptUser = () => {    
      inquirer.prompt(teamQuestions)
      .then (teamData => {    
          //pushes each newly created team member to array
          if (teamData.role === "Manager") {
            const manager = new Manager (teamData.name, teamData.employeeID, teamData.email, teamData.officeNumber);
            team.push(manager);
          } else
          
          if (teamData.role === "Engineer") {
            const engineer = new Engineer (teamData.name, teamData.employeeID, teamData.email, teamData.engineerGithub);
            team.push(engineer);
          } else 
            
          if (teamData.role === "Intern") {
            const intern = new Intern (teamData.name, teamData.employeeID, teamData.email, teamData.school);
            team.push(intern);
          }

         // console.log(team)

        //condition to exit app, and write data to html page using helper functions in generateHTML.js
        if (teamData.addOrEnd === "Finished building team") {
            console.log ('Generating HTML page... Open index.html to see.'); 
            showData();
            let data = createHTML();
            writeFile(data); 
            } else {
              promptUser(teamQuestions)
            }
        })
        .catch (err => {console.log(err);})
}



function init () {
    console.log (
    `=================
    Hi, Welcome to Team Summaries! This application will help build an HTML page to display your team's information.
    Let's get started.
    =================`
    );
    promptUser()
  }

// call to start application when "node index" is ran
init()
