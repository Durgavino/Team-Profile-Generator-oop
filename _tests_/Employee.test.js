const Employee = require('../lib/Employee');

        test("Should Create an Object with name", () => {
            const name = "Durga";
           const empname= new Employee(name);   
            expect(empname.name).toBe(name);
                    });
        test("Should Create an Object with id", () => {
            const name = "Durga";
            const id = 1;
            
            const empId= new Employee(name,id);
                       
            expect(empId.id).toBe(id);
           
         });
        test("Should Create an Object with Email", () => {
            const name = "Durga";
            const id = 1;
            const email = "durga@gmail.com";
            
            const empEmail= new Employee(name,id,email);
                       
            expect(empEmail.email).toBe(email);
           
        });

