var form = document.querySelector('form');
var encrypt = document.querySelector('#encrypt');
var decrypt = document.querySelector('#decrypt');
var deleteText = document.querySelector('#deleteText');
var showText = document.querySelector("#showText");
var noText = document.querySelector("#no-text");
var withText = document.querySelector("#with-text");
var addText = document.querySelector("#addText");

function validText(fun) {
    var str = addText.value;
    if (str.length > 0) {
        noText.classList.add("d-none");
        withText.classList.remove("d-none");
        showText.value = fun(str);
    } else {
        noText.classList.remove("d-none");
        withText.classList.add("d-none");
    }
}

deleteText.addEventListener("click", function () {
    if (addText.value.length > 0) {
        addText.value = '';
        noText.classList.remove("d-none");
        withText.classList.add("d-none");
        addText.focus();
    }
});

deleteText.addEventListener("click", hideButton);
['paste', 'keyup'].forEach(e => addText.addEventListener(e, hideButton));

function hideButton() {
    if (addText.value.length > 0) {
        deleteText.classList.add("d-none");
        deleteText.classList.remove("d-none");
    } else {
        deleteText.classList.remove("d-none");
        deleteText.classList.add("d-none");
    }
}



