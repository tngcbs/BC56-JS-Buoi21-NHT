function getErrElement(idError) {
    return document.querySelector(idError);
}

function isNotEmpty(value, idError, message) {
    var element = getErrElement(idError);

    if (value.trim() === "") {
        element.innerHTML = message;
        element.style.display = 'inline';
        return false;
    } else {
        element.innerHTML = "";
        return true;
    }
}

function validateAccount(account, idError, message) {
    var element = getErrElement(idError);
    var numericRegex = /^[0-9]{4,6}$/;

    if (!numericRegex.test(account)) {
        element.innerHTML = message;
        return false;
    } else {
        element.innerHTML = "";
        return true;
    }
}

function validateName(fullname, idError, message) {
    var element = getErrElement(idError);
    var nameRegex = /^[a-zA-Z\s\u00C0-\u1EF9]+$/;

    if (!nameRegex.test(fullname)) {
        element.innerHTML = message;
        return false;
    } else {
        element.innerHTML = "";
        return true;
    }
}

function validateEmail(email, idError, message) {
    var element = getErrElement(idError);
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        element.innerHTML = message;
        return false;
    } else {
        return true;
    }
}

function validatePassword(password, idError, message) {
    var element = getErrElement(idError);
    var passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,10}$/;

    if (!passwordRegex.test(password)) {
        element.innerHTML = message;
        return false;
    } else {
        return true;
    }
}