
var modal = document.getElementById('modal-thing');

var button = document.getElementById('modalButt');

var closeModal = document.getElementsByClassName('closeBUTT');

button.addEventListener('click', openModal);

closeModal.addEventListener('click', closeMod);


function openModal(){

    modal.style.display = 'block';

}

function closeMod(){

    modal.style.display ='none';

}