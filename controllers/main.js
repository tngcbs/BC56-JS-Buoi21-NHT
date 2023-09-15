var employeeList = new EmployeeList;

function getElement(selector) {
    return document.querySelector(selector);
}

function getInputValue() {
    var account = getElement("#tknv").value.trim();
    var fullname = getElement("#name").value;
    var email = getElement("#email").value;
    var password = getElement("#password").value;
    var startDate = getElement("#datepicker").value;
    var baseSalary = +getElement("#luongCB").value;
    var position = getElement("#chucvu").value;
    var workingHours = +getElement("#gioLam").value;

    var employee = new Employee(account, fullname, email, password, startDate, baseSalary, position, workingHours);
    return employee;
}

function renderList() {
    var htmlString = "";

    for (var index = 0; index < employeeList.employees.length; index++) {
        var currentEmployee = employeeList.employees[index];
        htmlString += `
            <tr class="text-center">
                <td>${currentEmployee.account}</td>
                <td>${currentEmployee.fullname}</td>
                <td>${currentEmployee.email}</td>
                <td>${currentEmployee.startDate}</td>
                <td>${currentEmployee.position}</td>
                <td>${currentEmployee.calcSalary()}</td>
                <td>${currentEmployee.rating()}</td>
                <td><button type="button" onclick="editEmployee('${currentEmployee.account}')" id="btnEdit" class="btn btn-warning">Sửa</button>
                <button type="button" onclick="deleteEmployee('${currentEmployee.account}')" id="btnDel" class="btn btn-danger">Xóa</button></td>
            </tr>
        `;
    }
    getElement("#tableDanhSach").innerHTML = htmlString;
}

function resetForm() {
    getElement("#tknv").value = "";
    getElement("#tknv").disabled = false;
    getElement("#name").value = "";
    getElement("#email").value = "";
    getElement("#password").value = "";
    getElement("#datepicker").value = "";
    getElement("#luongCB").value = "";
    getElement("#chucvu").value = "";
    getElement("#gioLam").value = "";
}

getElement("#btnThemNV").onclick = function () {
    var newEmployee = getInputValue();
    var valid = true;

    valid &= isNotEmpty(newEmployee.account, "#tbTKNV", "Tài khoản không được để trống")
        && validateAccount(newEmployee.account, "#tbTKNV", "Tài khoản phải có từ 4 - 6 ký số");

    valid &= isNotEmpty(newEmployee.fullname, "#tbTen", "Họ và tên không được để trống")
        && validateName(newEmployee.fullname, "#tbTen", "Họ và tên phải là chữ");

    valid &= isNotEmpty(newEmployee.email, "#tbEmail", "Email không được để trống")
        && validateEmail(newEmployee.email, "#tbEmail", "Email không đúng định dạng");

    valid &= isNotEmpty(newEmployee.password, "#tbMatKhau", "Mật khẩu không được để trống")
        && validatePassword(newEmployee.password, "#tbMatKhau", "Mật khẩu không đúng định dạng (từ 6-10 ký tự, chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt)");

    valid &= isNotEmpty(newEmployee.startDate, "#tbNgay", "Ngày không được để trống")
        && validateDate(newEmployee.startDate, "#tbNgay", "Ngày không đúng định dạng (dd/mm/yyyy)");

    if (valid) {
        var newEmployee = getInputValue();
        employeeList.addEmployee(newEmployee);
        renderList(employeeList.employees);
        resetForm();
    }
};

function editEmployee(account) {
    getElement("#btnThem").click();
    var currentEmployee = employeeList.getEmployeeDetails(account);
    if (currentEmployee) {
        getElement("#tknv").value = currentEmployee.account;
        getElement("#tknv").disabled = true;
        getElement("#name").value = currentEmployee.fullname;
        getElement("#email").value = currentEmployee.email;
        getElement("#password").value = currentEmployee.password;
        getElement("#datepicker").value = currentEmployee.startDate;
        getElement("#luongCB").value = currentEmployee.baseSalary;
        getElement("#chucvu").value = currentEmployee.position;
        getElement("#gioLam").value = currentEmployee.workingHours;
    }
}

getElement("#btnCapNhat").onclick = function () {
    var employee = getInputValue();
    employeeList.updateEmployee(employee);
    renderList(employeeList.employees);
    resetForm();
    getElement("#btnDong").click();
}

getElement("#btnTimNV").onclick = function () {
    var filter = getElement("#searchName").value;
    var filterList = employeeList.searchEmployeeByRating(filter);
    var htmlString = "";

    for (var index = 0; index < filterList.length; index++) {
        var currentEmployee = filterList[index];
        htmlString += `
            <tr class="text-center">
                <td>${currentEmployee.account}</td>
                <td>${currentEmployee.fullname}</td>
                <td>${currentEmployee.email}</td>
                <td>${currentEmployee.startDate}</td>
                <td>${currentEmployee.position}</td>
                <td>${currentEmployee.calcSalary()}</td>
                <td>${currentEmployee.rating()}</td>
                <td><button type="button" onclick="editEmployee('${currentEmployee.account}')" id="btnEdit" class="btn btn-warning">Sửa</button>
                <button type="button" onclick="deleteEmployee('${currentEmployee.account}')" id="btnDel" class="btn btn-danger">Xóa</button></td>
            </tr>
        `;
    }
    getElement("#tableDanhSach").innerHTML = htmlString;
}

function deleteEmployee(account) {
    employeeList.deleteEmployee(account);
    renderList(employeeList.employees);
}

getElement("#btnDong").onclick = function () {
    resetForm();
    displayNone(".sp-thongbao");
}