const getColor = () => {

    const randomNum = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNum.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerText = randomCode;
}

document.getElementById('btn').addEventListener('click', getColor);

getColor();

console.log(Math.floor( Math.random() * 16777215));