const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHtml=require('./src/generateHtml');

const employeeList=[];
    

function employeeType() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Select the Employee Type :',
            name: 'employee',
            choices: ["Manager", "Engineer", "Intern","I dont want to add the members"]
        }
    )
        .then(val => {
            if (val.employee === "Manager") {
                return addManager();
            }
            else if(val.employee === "Engineer"){
                return addEngineer();
            }
            else if(val.employee === "Intern"){
                return addIntern();
            }
            else if(val.employee === "I dont want to add the members"){
                return 0;
            }
        }
        )
}

employeeType();

function addManager() {
    inquirer.prompt([{
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
   ]
    )
    .then((mval)=>{
        const manager= new Manager(mval.managerName,mval.managerEmail,mval.managerNumber,mval.managerId);
        console.log(manager);
        employeeList.push(manager);
       // writeToFile("")
        return employeeType();
    })
}



function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'what is your Team Engineer Name',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'what is your Team Engineer Email',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'what is your Team Engineer Github',
        name: 'engineerGithub'
    },
    {
        type: 'input',
        message: 'what is  your Team Engineer ID',
        name: 'engineerId'
    }]
    )
    .then((mval)=>{
        const engineer= new Engineer(mval.engineerName,mval.engineerEmail,mval.engineerGithub,mval.engineerId);
        console.log(engineer);
      // employeeList.push(engineer);
        return employeeType();
    })
}



function addIntern() {
    inquirer.prompt([{
        type: 'input',
        message: 'what is your Team Intern Name',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'what is your Team Intern Email',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'what is your Team Intern School ',
        name: 'internSchool'
    },
    {
        type: 'input',
        message: 'what is  your Team Intern ID',
        name: 'internId'
    }]
    )
    .then((mval)=>{
        const intern= new Intern(this.internName,this.internName,this.internSchool,this.internId);
        console.log(mval);
//        employeeList.push(mval);
        return employeeType();
    })
}

function writeToFile(filename,mval)
{
    fs.watchFile(filename,generateHtml(mval),(err)=>{
        if(err){
            throw new Error(err)
        }
        console.log("File was written successfully");
        console.log(fs.readFileSync(filename, "utf8"));;
    });
}

