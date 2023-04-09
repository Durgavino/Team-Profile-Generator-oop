const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

class question{
    constructor(){
        this.employeeList=[];
    }
}

function employeeType() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Select the Employee Type :',
            name: 'employee',
            choices: ["Manager", "Engineer", "Intern"]
        }
    )
        .then(val => {
            if (val.employee === "Manager") {
                return addManager();
            }
            else if(val.employee === "Engineer"){
                return addEngineer();
            }
            

        }
        )
}

employeeType();

function addManager() {
    inquirer.prompt({
        type: 'input',
        message: 'what is your Team Manager Name',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'what is your Team Manager Email',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'what is your Team Manager Office Number',
        name: 'managerNumber'
    },
    {
        type: 'input',
        message: 'what is your Team Manager ID',
        name: 'managerId'
    },
    {
        type: 'list',
        message: 'Which type of Team Member you would like to add?',
        name: 'managerteam',
        choices: ["Engineer","Intern","I dont want to add the members"]
    }
    )
    .then((mval)=>{
        const manager= new Manager(this.managerName,this.managerEmail,this.managerNumber,this.managerId,this.managerteam);
        console.log(manager);
    })
}



// function addEngineer() {
//     inquirer.prompt({
//         type: 'input',
//         message: 'what is your Team Engineer Name',
//         name: 'engineerName'
//     },
//     {
//         type: 'input',
//         message: 'what is your Team Engineer Email',
//         name: 'engineerEmail'
//     },
//     {
//         type: 'input',
//         message: 'what is your Team Engineer Github',
//         name: 'engineerGithub'
//     },
//     {
//         type: 'input',
//         message: 'what is  your Team Engineer ID',
//         name: 'engineerId'
//     },
//     {
//         type: 'list',
//         message: 'Which type of Team Member you would like to add?',
//         name: 'engineerteam',
//         choices: ["Engineer","Intern","I dont want to add the members"]
//     }
//     )
//     .then((eval)=>{
//         const engineer= new Engineer(this.engineerName,this.engineerEmail,this.engineerGithub,this.engineerId,this.engineerteam);
//         console.log(engineer);
//     })
// }



