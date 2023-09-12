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

    this.searchEmployeeByRating = function (rating) {
        var filterList = [];
        for (var index = 0; index < this.employees.length; index++) {
            var currentEmployee = this.employees[index];
            if (currentEmployee.rating() === rating) {
                filterList.push(currentEmployee);
            }
        }
        return filterList;
    }

    this.getEmployeeDetails = function (username) {
        var employeeIndex = this.searchEmployee(username);
        if (employeeIndex != -1) {
            var currentEmployee = this.employees[employeeIndex];
            return currentEmployee;
        }
    }

    this.updateEmployee = function (employee) {
        var employeeIndex = this.searchEmployee(employee.username);
        if (employeeIndex != -1) {
            Object.assign(this.employees[employeeIndex], employee);
        }
    }

    this.deleteEmployee = function (username) {
        var employeeIndex = this.searchEmployee(username);
        if (employeeIndex != -1) {
            this.employees.splice(employeeIndex, 1);
        }
    }
}