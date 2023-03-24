const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
test("Should create an Object with Github",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const github="DurgaVino"
    const engineer=new Engineer(name, id, email,github);
    expect(engineer.github).toBe(github);
});

