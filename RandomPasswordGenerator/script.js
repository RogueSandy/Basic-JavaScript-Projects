const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$()_/'

const all = Array.from(upperCase + lowerCase + number + symbol);
const length = 12;

const input = document.querySelector('.result input');
const btn = document.querySelector('button');

function showPassword(){
    let password = '';
    while(length > password.length){
        const random = Math.floor(Math.random() * all.length);
        password += all[random];
    }
    input.value = password;
}

function copyPass(){
    input.select();
    document.execCommand('copy');
}

