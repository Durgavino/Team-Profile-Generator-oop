const generateManager= function(manager){
    return`${manager.name}${manager.id}${manager.email}${manager.officeNumber}`;
}

const generateEngineer= function(engineer){
    return`${engineer.name}${engineer.id}${engineer.email}${engineer.github}`;
}

const generateIntern= function(intern){
    return`${intern.name}${intern.id}${intern.email}${intern.school}`;
}


function employeePicker(){

    if(teammember[i].role == "Manager"){
        starter += generateManager(teammember[i])

        }else if(teammember[i].role == "Engineer"){
            // same as above but for the generateIntern 
            starter += generateEngineer(teammember[i])
        }else if(teammember[i].role == "Intern"){
            // same as above but for the generateengineer 
            starter += generateIntern(teammember[i])
        }

}

const generateHTML = (teammember)=>{
    console.log(teammember);
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
    ${employeePicker()}
</body>
</html>

`;
}
//     var starter = `` // this is going to be the final string that we will append to 
//     // for loop of each member
//     for( let i=0;i<teammember.length;i++){
    

//            }
//         return starter;
// }


module.exports=generateHTML;