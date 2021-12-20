const fs = require ('fs')
const team = require ('../../index')


// for each employee make this card with their info
function showData () {
    for (let i = 0; i < team.length; i++) {
    return `
                    Employee Role
                </div>
            </div>

            <h4 class="mt-1 text-xl bg-blue-300 p-6 font-semibold uppercase leading-tight truncate">Team
                Member's Name ${team[i].name}</h4>
            <div class="mt-4">
                <ul>
                    <li><span class="text-teal-600 text-md font-semibold">ID: ${team[i].id} </span></li>
                    <li><span class="text-teal-600 text-md font-semibold">Email: ${team[i].email}</span></li>
                    <li><span class="special text-teal-600 text-md font-semibold">  </span></li>
                `
}}

function createHTML () {
    
let results =  `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link href="./style.css" rel="stylesheet">
    <title>Team Demo</title>
</head>

<body>
    <h1 class="text-blue-800 text-2xl text-center py-8">Meet The Team</h1>
    <section id='teamSection'>
        <div class="wrapper h-50 w-50 bg-gray-400 bg-blend-overlay antialiased text-gray-900">
            <div>
                <img src="../assets/images/computer-background.jpg" alt="background image of computer"
                    class="w-full object-cover object-center rounded-lg shadow-md">
                <div class="relative px-4 -mt-16  ">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-baseline">
                            <div class="ml-2 text-gray-600 uppercase text-sm font-semibold tracking-wider">
                               
                               ${showData ()}
                               
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</body>
<script href="../index.js"></script>

</html>`
// console.log(typeof results);
// console.log(results)
return results
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('test.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  module.exports = { showData, writeFile, createHTML };
  const Manager = require('../Manager');
const Intern = require('../Intern');
const Engineer = require('../Engineer');
const Employee = require('../Employee')
