const generateemployeeList = (employeeList) => {


    const generateManager = (manager) => {
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
        
      MANAGER NAME: ${manager.getName()},
      Manager Email: ${manager.getId()},
      MANAGER ID: ${manager.getEmail()},
      Manager OfficeNumber:${manager.getOfficeNumber()},
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
        
      Engineer NAME: ${engineer.getName()},
      Engineer Email: ${engineer.getId()},
      Engineer ID: ${engineer.getEmail()},
      Engineer Github:${engineer.getGithub()},
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
            
          Intern NAME: ${intern.getName()},
          Intern Email: ${intern.getEmail()},
          Intern ID: ${intern.getId()},
          Intern School:${intern.getSchool()},
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
    ${generateemployeeList(teammember)}  

`;
}


module.exports = generateHTML;


