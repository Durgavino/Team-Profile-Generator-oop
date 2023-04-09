// function manager (manager){
//     return `${manager}`;
// }
// manager();

const generateManager=manager=>{
    return`
    ${manager.getName()}
    ${manager.getEmail()}
    ${manager.getId()}
    ${manager.getOfficeNumber()}`
}

