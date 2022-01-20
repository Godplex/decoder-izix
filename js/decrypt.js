decrypt.addEventListener('click', function () {
    validText(replaceEncryptVowels);
});

var replaceEncryptVowels = (str = '') => {
    var regex = /ai|enter|imes|ober|ufat|AI|ENTER|IMES|OBER|UFAT/g;
    str = str.replace(regex, (m) => {
        switch (m) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            case 'AI':
                return 'A';
            case 'ENTER':
                return 'E';
            case 'IMES':
                return 'I';
            case 'OBER':
                return 'O';
            case 'UFAT':
                return 'U';
        }
    });

    return str;
};