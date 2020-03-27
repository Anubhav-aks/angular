class Employee1 {
    name: string;
    salary: number;
    designation: string;
    constructor(n: string, m: number) {
        this.name = n;
        this.salary = m;
        if (m > 40000) {
            this.designation = "manager"
        }
        else {
            this.designation = "Developer"
        }
    }

    display1() {

        console.log(`1.${this.name} 2.${this.salary} 3.${this.designation}`)



    }
}
let employ = new Employee1("Anubhav", 50000);
console.log(`${employ.name} ${employ.salary} ${employ.designation}`)
class Company {
    name: string;
    employees: Employee1[];
    m: number;
    max: number = 0;
    min: number = 40000;

    display() {

        for (let em of this.employees) {
            em.display1();
            em.salary;
            let m = em.salary;
            if (this.max < m) {
                this.max = m;
            }
            if (this.min > m) {
                this.min = m;
            }
        }
        console.log(`The highest salary is:${this.max}
        and Lowest salary is=${this.min}`)
    }
}
let e1 = new Employee1("ANU", 30000);
let e2 = new Employee1("BHAV", 40000);
let e3 = new Employee1("JEET", 50000);
let e4 = new Employee1("KAUR", 60000);
let com = new Company();
com.employees = [e1, e2, e3, e4];
com.display();

