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