const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const generateHTML = require('./src/generateHtml');

const employeeList = [];


function employeeType() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Select the Employee Type :',
            name: 'employee',
            choices: ["Manager", "Engineer", "Intern", "I dont want to add the members"]
        }
    )
        .then(val => {
            if (val.employee === "Manager") {
                return addManager();

            }
            else if (val.employee === "Engineer") {
                return addEngineer();

            }
            else if (val.employee === "Intern") {
                return addIntern();

            }
            else if (val.employee === "I dont want to add the members") {

                //return 0;

            }
            filesys();
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
        .then((mval) => {
            const manager = new Manager(mval.managerName, mval.managerEmail, mval.managerNumber, mval.managerId);
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
        .then((mval) => {
            const engineer = new Engineer(mval.engineerName, mval.engineerEmail, mval.engineerGithub, mval.engineerId);
            console.log(engineer);
            employeeList.push(engineer);
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
        .then((mval) => {
            const intern = new Intern(mval.internName, mval.internName, mval.internSchool, mval.internId);
            console.log(intern);
            employeeList.push(intern);
            return employeeType();
        })
}


// const filesys = () => {
//     //console.log(employeeList,"filesys");
//     for (i = 0; i < employeeList.length; i++) {
//         fs.writeFile("./dist/index.html",
//             `Manager Name :${employeeList[0].name},
//     Manager Id :${employeeList[0].id},
//     Manager Email :${employeeList[0].email},Manager OfficeNumber :${employeeList[0].officeNumber},`, "utf8", function (err) {
//             if (err) {
//                 throw err;

//             }
//             console.log("File Written");
//         })
//     }

// }

const filesys =()=>{
  //  console.log(employeeList,"filesys");
      // const html = generateHtml(employeeList);
const html=employeeList;
      // console.log(html);
        fs.writeFile("./dist/index.html",generateHtml(html),"utf8",function(err){
            if(err){
                throw err;
                
            }
            console.log("File Written");
        })
    }

