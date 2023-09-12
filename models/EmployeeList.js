function EmployeeList() {
    this.employees = [];

    this.addEmployee = function (employee) {
        this.employees.push(employee);
    };

    this.searchEmployee = function (username) {
        var employeeIndex = -1;

        for (var index = 0; index < this.employees.length; index++) {
            var currentEmployee = this.employees[index];
            if (currentEmployee.username === username) {
                employeeIndex = index;
                break;
            }
        }
        return employeeIndex;
    }

    this.deleteEmployee = function (username) {
        var employeeIndex = this.searchEmployee(username);
        if (employeeIndex != -1) {
            this.employees.splice(employeeIndex, 1);
        }
    }
}