const Employee = {
  calculateTax() {
    console.log("Tax =", this.salary * 0.1);
  },
};

const e1 = {
  salary: 50000,
};

const e2 = {
  salary: 100000,
  calculateTax() {
    console.log("Tax =", this.salary * 0.2);
  },
};

e1.__proto__ = Employee;
e2.__proto__ = Employee;

e1.calculateTax();
e2.calculateTax();
