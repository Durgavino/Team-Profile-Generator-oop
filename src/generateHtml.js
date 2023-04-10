const generateManager= function(manager){
    return`${manager.name}${manager.id}${manager.email}${manager.officeNumber}`;
}

const generateEngineer= function(engineer){
    return`${engineer.name}${engineer.id}${engineer.email}${engineer.github}`;
}

const generateIntern= function(intern){
    return`${intern.name}${intern.id}${intern.email}${intern.school}`;
}



const generateHTML = (teammember)=>{
    var starter = `` // this is going to be the final string that we will append to 
    // for loop of each member
    for( let i=0;i<teammember.length;i++){
    

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
        
}


module.exports = generateHTML;