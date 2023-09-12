function EmployeeList() {
    this.employees = [];

    this.addEmployee = function (employee) {
        this.employees.push(employee);
    };
}