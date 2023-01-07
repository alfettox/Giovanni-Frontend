import { characters, numbers, symbols } from './data.js';

const generatorBtn = document.getElementById('generator-btn');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const rangeLenght = document.getElementById('range-lenght');
const lettersCheckbox = document.getElementById('letters');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

generatorBtn.addEventListener('click', function () {
    password1.innerHTML = "";
    password2.innerHTML = "";
    if (lettersCheckbox.checked === false &&
        numbersCheckbox.checked === false &&
        symbolsCheckbox.checked === false) {
        alert('Please select at least one option');
    } else {
        if (lettersCheckbox.checked === true &&
            numbersCheckbox.checked === false &&
            symbolsCheckbox.checked === false) {

            password1.innerHTML = generatePassword(1);
            password2.innerHTML = generatePassword(1);

        } else if (
            lettersCheckbox.checked === true &&
            numbersCheckbox.checked === true &&
            symbolsCheckbox.checked === false) {

            password1.innerHTML = generatePassword(2);
            password2.innerHTML = generatePassword(2);
        } else if (
            lettersCheckbox.checked === true &&
            numbersCheckbox.checked === true &&
            symbolsCheckbox.checked === true) {
            password1.innerHTML = generatePassword(3);
            password2.innerHTML = generatePassword(3);

        } else {
            password1.innerHTML = generatePassword(4);
            password2.innerHTML = generatePassword(4);
        }
    }
});

function generatePassword(type) {
    let password = "";
    for (let i = 0; i < rangeLenght.value; i++) {
        let rnd = Math.floor(Math.random() * 2);
        if (type == 1) {
            password += characters[(Math.floor(Math.random() * characters.length))];
        } else if (type == 2) {
            if (rnd == 0) {
                password += characters[(Math.floor(Math.random() * characters.length))];
            } else {
                password += numbers[(Math.floor(Math.random() * numbers.length))];
            }
        } else if (type == 3) {
            let rnd = Math.floor(Math.random() * 3);
            if (rnd == 0) {
                console.log(rnd)
                password += characters[(Math.floor(Math.random() * characters.length))];
            } else if (rnd == 1) {
                password += numbers[(Math.floor(Math.random() * numbers.length))];
                console.log(rnd)
            } else {
                password += symbols[(Math.floor(Math.random() * symbols.length))];
                console.log(rnd)
            }
        } else if (type == 4) {
            let rnd = Math.floor(Math.random() * 2);
            if (rnd == 0) {
                password += characters[(Math.floor(Math.random() * characters.length))];
            }
            else {
                password += symbols[(Math.floor(Math.random() * symbols.length))];

            }
        }
    }
    return password;
}