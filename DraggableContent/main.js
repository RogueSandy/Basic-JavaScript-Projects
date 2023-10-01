const lists = document.getElementsByClassName('list');
const rightBox = document.getElementById('right');
const leftBox = document.getElementById('left');

for(let list of lists){
    list.addEventListener('dragstart', (e) => {
        let selected = e.target;
        console.log(selected);

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener("drop", (e)=>{
            rightBox.appendChild(selected);
            selected = null;
        });
        

        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault();
        });
        leftBox.addEventListener("drop", (e)=>{
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}