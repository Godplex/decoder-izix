var boton = document.querySelector("#copy");
boton.addEventListener("click", function () {
    var copyText = document.querySelector("#showText");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

}
);