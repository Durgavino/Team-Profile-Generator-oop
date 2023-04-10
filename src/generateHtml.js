const generateManager = (manager)=> {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
  MANAGER NAME: ${manager[0].getName()},
  Manager Email: ${teammember[0].getId()},
  MANAGER ID: ${teammember[0].getEmail()},
  Manager OfficeNumber:${teammember[0].getOfficeNumber()},
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
  Engineer NAME: ${teammember[0].name},
  Engineer Email: ${teammember[0].id},
  Engineer ID: ${teammember[0].email},
  Engineer Github:${teammember[0].officeNumber},
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
      Intern NAME: ${teammember[0].name},
      Intern Email: ${teammember[0].id},
      Intern ID: ${teammember[0].email},
      Intern School:${teammember[0].school},
    </body>
    </html>
    
       `;
    
    // return `${intern.name}${intern.id}${intern.email}${intern.school}`;
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${employeePicker(teammember)}    
</body>
</html>

`;
}


module.exports = generateHTML;


