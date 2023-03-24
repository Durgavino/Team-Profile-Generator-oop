
const Engineer = require('../lib/Engineer');
test("Should create an Object with Github",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const github="DurgaVino";
    const engineer=new Engineer(name, id, email,github);
    expect(engineer.github).toBe(github);
});
test("testing a getGithub for Engineer",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const github="DurgaVino";
    const engineer=new Engineer(name, id, email,github);
    expect(engineer.getGithub()).toBe(github);
});
test("testing a getRole for Engineer",()=>{
    const name = "Durga";
    const id = 1;
    const email = "durga@gmail.com";
    const github="DurgaVino";
    const engineer=new Engineer(name, id, email,github);
    expect(engineer.getRole()).toBe("Engineer");
});