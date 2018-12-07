
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

//getting button element for the money $$$$
var moneyButt = document.getElementById("moneyButt");

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

//******Listener for the dollar generator ******************//

moneyButt.addEventListener('click', function(){
    $('moneyButt').makeItRain();

});

//********* Money stuff ************//

$(moneyButt).makeItRain();

var moneymoneymoney = new Audio();
var randomNumbo = Math.floor((Math.random() * 10) + 1);

var discoBall = document.createElement("img");
discoBall.src = "disco_ball.gif";
var welcomePagePhotos = document.getElementById("welcome-page-container");

if(randomNumbo >= 5 && randomNumbo != 10){
    moneymoneymoney.src = "lodesOmone.mp3";
}else if(randomNumbo < 5) {
    moneymoneymoney.src = "theOtherMoneySong.mp3"
    }else if (randomNumbo == 10){
        moneymoneymoney.src = "carelessWhisper.mp3"
        welcomePagePhotos.appendChild(discoBall);
        document.getElementById("welcome-page-container").style.h2;
        //10% chance to get careless whisper
        //adds disco ball to the page
        // Once you get careless whisper you can click the button
        // to play it again until you refresh the page
    };

function PlaySound(){
moneymoneymoney.play();

};
