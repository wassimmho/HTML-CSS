const lengthdefi = document.getElementById('passnum');
const upperdefi = document.getElementById('upper');
const lowerdefi = document.getElementById('lower');
const symbdif = document.getElementById('symb');
const numdif  = document.getElementById('numb');
const passwordtext = document.getElementById('password');

function generatepassword() {
    const length = Number(lengthdefi.value);
    const uppercaseinc = upperdefi.checked;
    const lowercaseinc = lowerdefi.checked;
    const numinc = numdif.checked;
    const syminc = symbdif.checked;

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let symb = "/?><.,]}{[=+-_)(*&^%$#@!~";

    let allowdchar = "";
    let password = "";

    allowdchar += uppercaseinc ? upper : "";
    allowdchar += lowercaseinc ? lower : "";
    allowdchar += numinc ? num : "";
    allowdchar += syminc ? symb : "";

    if (length <= 0) {
        passwordtext.textContent = "A password must have at least one character.";
    } else {
        if (allowdchar.length === 0) {
            passwordtext.textContent = "You must allow at least one character type.";
        } else {
            for (let i = 1; i <= length; i++) {
                let chosen = Math.floor(Math.random() * allowdchar.length);
                password += allowdchar[chosen];
            }
            passwordtext.textContent = password;
        }
    }
}

function reset() {
    upperdefi.checked = false;
    lowerdefi.checked = false;
    symbdif.checked = false;
    numdif.checked = false;
    passwordtext.textContent = "";
    lengthdefi.value = "";
}
