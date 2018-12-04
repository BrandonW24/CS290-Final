
var modal = document.getElementById('modal-thing');

var button = document.getElementById('modalButt');

var closeModal = document.getElementsByClassName("closeBUTT")[0];

button.addEventListener('click', openModal);

closeModal.addEventListener('click', closeMod);

window.addEventListener('click', outOftheModalClick);

//Modal stuff
function openModal(){

    modal.style.display = 'block';

}

function closeMod(){

    modal.style.display ='none';

}

function outOftheModalClick(e){

    if(e.target == modal){
        modal.style.display = 'none';
    }

}