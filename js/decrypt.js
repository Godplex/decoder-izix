decrypt.addEventListener('click', function () {
    validText(replaceEncryptVowels);
});

var replaceEncryptVowels = (str = '') => {
    const mapObj = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };
    var regex = /ai|enter|imes|ober|ufat/g;
    str = str.replace(regex, (m) => mapObj[m]);
    return str;
};