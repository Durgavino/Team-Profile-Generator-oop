const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');


function employeeType() {
    inquirer.prompt(
        [{
            type: 'list',
            message: 'Select the Employee Type :',
            name: 'employee',
            choices: ["Manager", "Engineer", "Intern"]
        }]
    ).then(data => {
        console.log(data);
    }
    
  
)}

employeeType();
