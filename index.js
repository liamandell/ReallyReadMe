let fs = require ( 'fs' );
let inquirer = require (`inquirer`);
const { type } = require('os');
inquirer
  .prompt([
    {
      type: `input`,
      message: `What is your name?`,
      name: `name`
    },    {
      type: `input`,
      message: `Where are you located?`,
      name: `location`
    },
    {
    type: `input`,
    message: `Tell us about yourself!`,
    name: `bio`
    },
    {
      type: `input`,
      message: `What is your LinkedIn URL?`,
      name: `linkedin`
    },
    {
      type: `input`,
      message: `What is your github URL?`,
      name: `github`
    },
    {
      type: `input`,
        message: `What is your email?`,
        name: `email`
        
    },
    {
        type: `input`,
          message: `what is the title?`,
          name: `title`
          
      },
      {
        type: `input`,
          message: `what is the description?`,
          name: `discription`
          
      },
      {
        type: `input`,
          message: `What did you need to install?`,
          name: `installation`
          
      },
      {
        type: `input`,
          message: `are there any testing frameworks?`,
          name: `test`
          
      },
      {
        type: `input`,
          message: `how do you use the application?`,
          name: `usage`
          
      },
      {
        type: `input`,
          message: `were there any contributors?`,
          name: `contributing`
          
      },
  ])
.then((response) => {
  const name = response.name;
  const location = response.location;
  const bio = response.bio;
  const linkedin = response.linkedin;
  const github = response.github;
    const email = response.email;
    const title = response.title;
    const discription = response.discription;
    const installation = response.installation;
    const test = response.test;
    const usage = response.usage;
    const contributing = response.contributing;
    
  fs.writeFileSync('README.md',
  `
  
  # ${name}
    ## ${title}

# Table of Contents
[location](#location)
[bio](#bio)
[discription](#discription)
[installation](#installation)
[test](#test)
[usage](#usage)
[contributing](#contributing)

# location
${location}
# bio
## ${bio}
# discription
## ${discription}
# installation
## ${installation}
# test
## ${test}
# usage
## ${usage}
# contributing
## ${contributing}
# questions
"Please contact me at ${email} if you have any questions!"
check out my github at ${github}
check out my linkedin at ${linkedin}

  `


  )});