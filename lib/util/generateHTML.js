const fs = require('fs')
const team = require('../../index')

const ee = []


// For each employee in "team" array, returns this HTML string with user's data
function showData() {
  let text = "";
  team.forEach((member) => {
    text += `
    <!--Start of Profile Container-->
    <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-8 lg:w-1/4 lg:my-0">
        <div id="profile" class="w-full border-green-500 border-4 lg:w-fit rounded-lg shadow-2xl bg-gray-300 opacity-90 mx-6">                    
            <div class="p-4 md:p-8 text-center">
                <div class="block mx-auto rounded-full shadow-xl h-48 w-48 bg-cover bg-center" style="background-image: url('./assets/images/profile-icon.jpg')"></div>
                <h1 class="text-3xl font-bold pt-8"><!--Team Member's name-->${member.name}</h1>
                <div class="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-75"></div>
                <p class="pt-4 text-base font-bold flex items-center justify-center"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg><!--Team role--> ${member.getRole()}</p>
                <p class="pt-8">ID: ${member.id}</br>
                    ${member.getSpecial()}
                </p>
                <!--button container-->
                <div class="pt-12 pb-8">
                    <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                      <!--email-->${member.getEmail()}
                    </button> 
                </div>
            </div>
        </div>
        </div>
    </div>
    <!--end of container for team member-->
    `;
  })
  ee.push(text);
}



// console.log(ee)

//creates string representing HTML template 
function createHTML() {
  let results = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Meet the Team</title>
</head>
<body class = "font-sans antialiased text-gray-900 leading-normal tracking-wider text-xl">
   <section class="text-green-700 font-bold text-4xl text-center py-16">
       <h1>Meet The Team</h1>
   </section>
    <section class="bg-gray-700 bg-center bg-cover bg-blend-soft-light bg-fixed h-fit pt-20 lg:flex lg:flex-wrap lg:justify-around" style="background-image:url('./assets/images/computer-background.jpg')">
    ${ee.map(card => (`${card}`))}
    </section>
</body>
</html>`
  return results;
}

//creates new index.html file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('index.html', fileContent, err => {
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