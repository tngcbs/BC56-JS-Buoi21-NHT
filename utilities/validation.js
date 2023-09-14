function isNotEmpty(value, idError, message) {
    var element = document.querySelector(idError);

    if (value.trim() === "") {
        element.innerHTML = message;
        element.style.display = 'inline';
        return false;
    } else {
        element.innerHTML = "";
        return true;
    }
}