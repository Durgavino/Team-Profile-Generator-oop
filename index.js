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

        }
        )
}

employeeType();

function addManager() {
    inquirer.prompt({
        type: 'input',
        message: 'what is you Team Manager Name',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'what is you Team Manager Email',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'what is you Team Manager Office Number',
        name: 'managerNumber'
    },
    {
        type: 'input',
        message: 'what is you Team Manager ID',
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


