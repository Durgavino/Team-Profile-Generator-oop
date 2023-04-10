const generateemployeeList = (employeeList) => {


    const generateManager = (manager) => {
        return `
        
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.i">
        <title>Team Profile Generator</title>
    </head>
    <body>
        
      MANAGER NAME: ${manager.getName()}<br>
      Manager Email: ${manager.getId()}<br>
      MANAGER ID: ${manager.getEmail()}<br>
      Manager OfficeNumber:${manager.getOfficeNumber()}<br>
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
        
      Engineer NAME: ${engineer.getName()}<br>
      Engineer Email: ${engineer.getId()}<br>
      Engineer ID: ${engineer.getEmail()}<br>
      Engineer Github:${engineer.getGithub()}<br>
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
            
          Intern NAME: ${intern.getName()}<br>
          Intern Email: ${intern.getEmail()}<br>
          Intern ID: ${intern.getId()}<br>
          Intern School:${intern.getSchool()}<br>
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
        <title>Document</title>
    </head>
    <body>
    ${generateemployeeList(teammember)}  
    </body>
    

`;
}


module.exports = generateHTML;


