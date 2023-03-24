const Manager = require('../lib/Manager');

test("Should create an Object with officeNumber",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const officeNumber=123456789;
    const manager=new Manager(name, id, email,officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});
