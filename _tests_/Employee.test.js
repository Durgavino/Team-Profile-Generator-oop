const Employee = require('../lib/Employee');

test("Employee", () => {
    test("Initialization", () => {
        it("Should Create an Object with name,id,Email", () => {
            const name = new Employee("Durga", 1, "durga@gmail.com");
            expect(Employee.name).toEqual("Durga");
            expect(Employee.id).toEqual(1);
            expect(Employee.email).toEqual("durga@gmail.com");
        });
        it("Should throw an error if there is no arguments", () => {

            const cb = () => new Employee();
            expect(cb).toThrowError();
        });
        it('Should throw an error if not provided a name', () => {
            const cb = () => new Employee(1,1,"durga@gmail.com");
            const err = new Error("Expected Parameter 'name to be a string");
            expect(cb).toThrowError(err);
        });
        it('Should throw an error if id is less than 0',()=>{
            const cb=()=>new Employee("Durga",-1,"durga@gmail.com");
            const err=new Error('Expected Parameter "id" to be non negative number');
            expect (cb).toThrowError(err);
        });
        it('Should throw an error if "Email" is without @',()=>{
            const cb=()=>new Employee("Durga",-1,"durgagmail.com");
            const err=new Error('Expected Paramater "Email" to be with @');
            expect(cb).toThrowError(err);

        });

        








    });
});