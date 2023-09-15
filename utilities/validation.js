function displayNotice(idError, message) {
    var element = document.querySelector(idError);
    element.innerHTML = message;
    element.style.display = "inline";
}

function hideNotice(idError) {
    var element = document.querySelector(idError);
    element.innerHTML = "";
    element.style.display = "none";
}

function isNotEmpty(value, idError, message) {
    if (value.trim() === "") {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}

function validateAccount(account, idError, message) {
    var numericRegex = /^[0-9]{4,6}$/;

    if (!numericRegex.test(account)) {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}

function validateName(fullname, idError, message) {
    var nameRegex = /^[a-zA-Z\s\u00C0-\u1EF9]+$/;

    if (!nameRegex.test(fullname)) {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}

function validateEmail(email, idError, message) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}

function validatePassword(password, idError, message) {
    var passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,10}$/;

    if (!passwordRegex.test(password)) {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}

function validateDate(date, idError, message) {
    var dateRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,10}$/;

    if (!dateRegex.test(date)) {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}

function validateSalary(salary, idError, message) {
    var salaryRegex = /^1\d{6,7}$|^20000000$/;

    if (!salaryRegex.test(salary.toString())) {
        displayNotice(idError, message);
        return false;
    } else {
        hideNotice(idError);
        return true;
    }
}