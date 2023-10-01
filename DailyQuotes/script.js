const apiLink = 'https://api.quotable.io/random';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuote(){
    let quoteLine = await fetch(apiLink);
    let data = await quoteLine.json();

    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author
}
getQuote();

function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text="+quote.innerHTML, "Tweet Window", "height= 400px, width=700px");
}