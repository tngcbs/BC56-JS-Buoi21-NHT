function displayNone(classMsg) {
    var elements = document.querySelectorAll(classMsg);

    for (var index = 0; index < elements.length; index++) {
        elements[index].style.display = "none";
    }
}