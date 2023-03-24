const Intern = require('../lib/Intern');
test("Should create an Object with School",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const school="Elizhabet";
    const intern=new Intern(name, id, email,school);
    expect(intern.school).toBe(school);
});
test("testing a getSchool for Intern",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const school="Elizhabet";
    const intern=new Intern(name, id, email,school);
    expect(intern.getSchool()).toBe(school);
});

test("testing a getRole for Intern",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const school="Elizhabet";
    const intern=new Intern(name, id, email,school);
    expect(intern.getRole()).toBe("Intern");
});