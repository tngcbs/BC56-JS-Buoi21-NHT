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

getElement("#btnThemNV").onclick = getInputValue;

function addEmployee() {

}
