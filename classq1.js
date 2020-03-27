var Employee1 = /** @class */ (function () {
    function Employee1(n, m) {
        this.name = n;
        this.salary = m;
        if (m > 40000) {
            this.designation = "manager";
        }
        else {
            this.designation = "Developer";
        }
    }
    Employee1.prototype.display1 = function () {
        console.log("1." + this.name + " 2." + this.salary + " 3." + this.designation);
    };
    return Employee1;
}());
var employ = new Employee1("Anubhav", 50000);
console.log(employ.name + " " + employ.salary + " " + employ.designation);
var Company = /** @class */ (function () {
    function Company() {
        this.max = 0;
        this.min = 40000;
    }
    Company.prototype.display = function () {
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var em = _a[_i];
            em.display1();
            em.salary;
            var m = em.salary;
            if (this.max < m) {
                this.max = m;
            }
            if (this.min > m) {
                this.min = m;
            }
        }
        console.log("The highest salary is:" + this.max + "\n        and Lowest salary is=" + this.min);
    };
    return Company;
}());
var e1 = new Employee1("ANU", 30000);
var e2 = new Employee1("BHAV", 40000);
var e3 = new Employee1("JEET", 50000);
var e4 = new Employee1("KAUR", 60000);
var com = new Company();
com.employees = [e1, e2, e3, e4];
com.display();
