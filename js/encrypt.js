encrypt.addEventListener('click', function () {
    validText(replaceVowels);
});

var replaceVowels = (str = '') => {
    const mapObj = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };
    var regex = /[aeiou]/g;
    str = str.replace(regex, (m) => mapObj[m]);
    return str;
};


