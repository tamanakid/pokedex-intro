export default function(str) {
    let capitalized = '';
    if (str) {
        capitalized = str.split('').map(function(letter) {
            if (letter === letter.toUpperCase()) {
                return '. ' + letter;
            } else {
                return letter;
            }
        }).join('');
    }
    return capitalized.charAt(0).toUpperCase() + capitalized.slice(1);
}