const listContainer = document.querySelector('.list-container');
const createBtn = document.querySelector('button');

function showData(){
    listContainer.innerHTML = localStorage.getItem('x');
}
showData();

function saveData(){
    localStorage.setItem('x', listContainer.innerHTML);
}

createBtn.addEventListener('click', () =>  {
    const notes = document.createElement('p');
    notes.classList.add('notes');
    notes.setAttribute('contentEditable', 'true');
    const imgs = document.createElement('img');
    imgs.src = './imgs/delete.png';
    listContainer.appendChild(notes).appendChild(imgs);
})

var notes = document.querySelectorAll('.notes');
listContainer.addEventListener('click', (e) =>{
        if(e.target.tagName === 'IMG'){
            e.target.parentElement.remove();
            saveData();
        }
        else if(e.target.tagName === 'P'){
            notes = document.querySelectorAll('.notes');
            notes.forEach(nt => {
                nt.onkeyup = function(){
                    saveData();
                }
            })
        }
})

document.addEventListener("keydown", event=>{
    if(event.key==="ENTER"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})