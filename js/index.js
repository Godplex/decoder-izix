var form = document.querySelector('form');
var encrypt = document.querySelector('#encrypt');
var decrypt = document.querySelector('#decrypt');

function captureText(form) {
    var addText = form.addText.value;
    return addText;
}

function validText(fun) {
    var str = captureText(form);
    var showText = document.querySelector("#showText");
    var noText = document.querySelector("#no-text");
    var withText = document.querySelector("#with-text");
    if (str.length > 0) {
        noText.classList.add("d-none");
        withText.classList.remove("d-none");
        showText.value = fun(str);
    } else {
        noText.classList.remove("d-none");
        withText.classList.add("d-none");
    }
}


