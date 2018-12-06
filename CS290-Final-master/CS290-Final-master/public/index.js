
//modal variables
var modal = document.getElementById('modal-thing');
var button = document.getElementById('modalButt');
var closeModal = document.getElementsByClassName("closeBUTT")[0];
button.addEventListener('click', openModal);
closeModal.addEventListener('click', closeMod);
window.addEventListener('click', outOftheModalClick);

//variables to get user's input
var postCategory = document.getElementById("post-category-fieldset");
var userInputPhotoURL = document.getElementById("photoURLinput");
var userInputTextPost = document.getElementById("userInpText");

//******************************Modal listener stuff*********************
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

//******************************End of Modal listener stuff*********************


//***************Text Input listener things ********************//

postCategory.addEventListener('click', function(){
    console.log("==A Category was selected");

});

userInputPhotoURL.addEventListener('keyup', function(ui){

    console.log("The user typed something ");
    userInputPhotoURL = ui.target.value.toLowerCase();
    console.log(" User input here : ", userInputPhotoURL);

});

userInputTextPost.addEventListener('keyup', function (ui) {

    console.log("The user typed something ");
    userInputTextPost = ui.target.value.toLowerCase();
    console.log(" User input here : ", userInputTextPost);

});

//***************End of Text Input listener things ***************//