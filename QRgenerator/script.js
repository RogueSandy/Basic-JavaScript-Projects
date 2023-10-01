const inputBox = document.querySelector('#qrtext');
const qr = document.querySelector('#qrimg');
const qrBox = document.querySelector('#qr');
const toastBox = document.querySelector('.toastBox');

function showQR(){
    if(inputBox.value.length > 0){
        qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputBox.value;

        qrBox.classList.add('qr');

        inputBox.value = '';
    }
    else{
        inputBox.classList.add('error');
        setTimeout(()=>{
            inputBox.classList.remove('error');
        }, 1000);

        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = 'Type Something!';
        toastBox.appendChild(toast);

        setTimeout(()=>{
            toast.remove()
        }, 5000);
    }
    
}