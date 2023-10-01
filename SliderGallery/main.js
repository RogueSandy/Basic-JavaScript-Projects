const wrap = document.querySelector('.wrap');
const nxtBtn = document.querySelector('.nxtBtn');
const bckBtn = document.querySelector('.bckBtn');

wrap.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    wrap.scrollLeft += evt.deltaY;
});

nxtBtn.addEventListener('click', ()=>{
    wrap.scrollLeft += 270;
});
bckBtn.addEventListener('click', ()=>{
    wrap.scrollLeft += -270;
});