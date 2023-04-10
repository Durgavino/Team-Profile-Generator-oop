const generateemployeeList = (employeeList) => {


    const generateManager = (manager) => {
        return `
        
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.i">
            </head>
    <body>
<div class="card">
<ul class= managerdiv> 
     <li> MANAGER NAME: ${manager.getName()}<br></li>
     <li> Manager Email: ${manager.getId()}<br></li>
     <li>MANAGER ID: ${manager.getEmail()}<br></li>
     <li>Manager OfficeNumber:${manager.getOfficeNumber()}<br></li>
      </ul>
      </div>
    </body>
   
    </html>
    
       `;
    }

    const generateEngineer = function (engineer) {
        return `
        
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.i">
        <title>Document</title>
    </head>
    <body>
    <div class="card">
    <ul class= engineerdiv> 
     <li> Engineer NAME: ${engineer.getName()}<br></li>
     <li> Engineer Email: ${engineer.getId()}<br></li>
     <li> Engineer ID: ${engineer.getEmail()}<br></li>
     <li> Engineer Github:${engineer.getGithub()}<br></li>
     </ul>
     </div>
    </body>
    </html>
    
       `;

        // return `${engineer.name}${engineer.id}${engineer.email}${engineer.github}`;
    }

    const generateIntern = function (intern) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.i">
            <title>Document</title>
        </head>
        <body>
        <div class="card">
        <ul class= interndiv> 
         <li> Intern NAME: ${intern.getName()}<br></li>
         <li> Intern Email: ${intern.getEmail()}<br></li>
         <li> Intern ID: ${intern.getId()}<br></li>
         <li> Intern School:${intern.getSchool()}<br></li>
         </ul>
         </div>
        </body>
        </html>
        
           `;

        // return `${intern.name}${intern.id}${intern.email}${intern.school}`;
    }

    const html = [];

    html.push(employeeList
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(employeeList
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    html.push(employeeList
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );
    return html.join("");
}




function employeePicker() {
    const teammember = [];
    for (let i = 0; i < teammember.length; i++) {
        if (teammember[i].role == "Manager") {
            starter += generateManager(teammember[i])
        } else if (teammember[i].role == "Engineer") {
            starter += generateEngineer(teammember[i])
        } else if (teammember[i].role == "Intern") {
            starter += generateIntern(teammember[i])
        }
    }
    //   return starter;
}

const generateHTML = (teammember) => {
    // console.log(teammember);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.i">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
    <header>Team Profile Generator</header>
    ${generateemployeeList(teammember)}  
    </body>
    

`;
}


module.exports = generateHTML;


