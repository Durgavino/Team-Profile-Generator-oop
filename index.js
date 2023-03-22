const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { default: Choices } = require('inquirer/lib/objects/choices');


const questions = [{
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
    name: 'manager',
    Choices: ["Engineer","Intern","I dont want to add the members"]
}]