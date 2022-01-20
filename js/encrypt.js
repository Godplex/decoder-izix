encrypt.addEventListener('click', function () {
    validText(replaceVowels);
});

var replaceVowels = (str = '') => {
    var regex = /[aeiouAEIOU]/g;
    str = str.replace(regex, (m) => {
        switch (m) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            case 'A':
                return 'AI';
            case 'E':
                return 'ENTER';
            case 'I':
                return 'IMES';
            case 'O':
                return 'OBER';
            case 'U':
                return 'UFAT';
        }
    });
    return str;
};