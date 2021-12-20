// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const inquirer = require ('Inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const team = []
const { writeFile, createHTML } = require('./lib/util/generateHTML');
// const makeEmployeeCards = require('./lib/util/generateHTML');
    // const managerTeam = []; const engineerTeam = []; const internTeam = []
// }]
// const pageContent = generateHTML(team)


const promptUser = () => {    
      inquirer.prompt(teamQuestions)
      .then (teamData => {    
        // teamData.team = []
      
        if (teamData.role === "Manager") {
          const manager = new Manager (teamData.name, teamData.employeeID, teamData.email, teamData.officeNumber);
          team.push(manager);
          // console.log(teamData.team)
    } else

    if (teamData.role === "Engineer") {
      const engineer = new Engineer (teamData.name, teamData.employeeID, teamData.email, teamData.engineerGithub);
      team.push(engineer);
      // console.log(teamData.team)
    } else 

    if (teamData.role === "Intern") {
        const intern = new Intern (teamData.name, teamData.employeeID, teamData.email, teamData.school);
        team.push(intern);
      }
      // console.log(team)
      
      if (teamData.addOrEnd === "Finished building team") {
          console.log ('Team Built!'); 
          return team;   
      } else {
        promptUser(teamQuestions)
      }
    })
    .then ((teamData => {return createHTML(teamData)}))
    .then (pageHTML => {return writeFile(pageHTML)})
    .catch (err => {console.log(err);
    })
    }

      //   return new Promise((resolve, reject) => {
      //     fs.writeFile('./mytest.html', teamDataResponse, err => {
      //       // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      //       if (err) {
      //         reject(err);
      //         // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
      //         return;
      //       }
      
      //       // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      //       resolve({
      //         ok: true,
      //         message: 'File created!'
      //       });
      //     });
      //   });
      // }




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


// function addTeamToPage (team) {
//   const newTeamCard = team.map()
// const card = document.createElement('div');
// card.appendChild(newTeamCard)
// const teamSection = document.querySelector('#teamSection')
// teamSection.appendChild(card)
// }


function init () {
    console.log(`
    =================
    Let's start with your team manager.
    =================
    `);
    
    promptUser()
   
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
