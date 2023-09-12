var employeeList = new EmployeeList;

function getElement(selector) {
    return document.querySelector(selector);
}

function getInputValue() {
    var username = getElement("#tknv").value;
    var fullname = getElement("#name").value;
    var email = getElement("#email").value;
    var password = getElement("#password").value;
    var startDate = getElement("#datepicker").value;
    var baseSalary = +getElement("#luongCB").value;
    var position = getElement("#chucvu").value;
    var workingHours = +getElement("#gioLam").value;

    var employee = new Employee(username, fullname, email, password, startDate, baseSalary, position, workingHours);
    return employee;
}

function renderList() {
    var htmlString = "";

    for (var index = 0; index < employeeList.employees.length; index++) {
        var currentEmployee = employeeList.employees[index];
        htmlString += `
            <tr class="text-center">
                <td>${currentEmployee.username}</td>
                <td>${currentEmployee.fullname}</td>
                <td>${currentEmployee.email}</td>
                <td>${currentEmployee.startDate}</td>
                <td>${currentEmployee.position}</td>
                <td>${currentEmployee.calcSalary()}</td>
                <td>${currentEmployee.rating()}</td>
                <td><button type="button" onclick="deleteEmployee('${currentEmployee.username}')" id="btnDel" class="btn btn-danger">Xóa</button></td>
            </tr>
        `;
    }
    getElement("#tableDanhSach").innerHTML = htmlString;
}

getElement("#btnThemNV").onclick = function () {
    var newEmployee = getInputValue();
    employeeList.addEmployee(newEmployee);
    renderList(employeeList.employees);
};

function deleteEmployee(username) {
    employeeList.deleteEmployee(username);
    renderList(employeeList.employees);
}