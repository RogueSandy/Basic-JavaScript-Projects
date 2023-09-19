const searchBox = document.querySelector('.search input');
const searchBtn = document.getElementById('btn');
const listContainer = document.querySelector('#listContainer');

//take input
searchBtn.addEventListener('click', () => {

    if(searchBox.value == ''){
        alert('Type Something');
    }
    else{
        let li = document.createElement('Li');
        li.innerHTML = searchBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }
    searchBox.value = '';
    saveData();
})


//add tasks
listContainer.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



//add to local storage
function saveData(){
    localStorage.setItem('data' , listContainer.innerHTML);
}
function getTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
getTask();