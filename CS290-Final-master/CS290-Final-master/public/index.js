
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

postCategory.addEventListener('click', function(ui){
    console.log("==A Category was selected", ui.target.value);
    userSelectedCat = ui.target.value;

});

userInputPhotoURL.addEventListener('keyup', function(ui){

    console.log("The user typed something ");
    userInputPhotoURL = ui.target.value.toLowerCase();
    console.log(" User input here : ", userInputPhotoURL);

});

userInputTextPost.addEventListener('keyup', function (ui) {

    console.log("The user typed something ");
    userInputTextPost = ui.target.value;
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

//*********************** Insert Post Stuff **********************//

function addBlog(photoURL, category, textInput) {
	var postData = {
		photoURL: photoURL,
		category: category,
		textInput: textInput
	};
	/*
	var postHTML = Handlebars.templates.postTemplate(postData);
	var insertPostContainer = document.getElementById("posts");
	insertPostContainer.insertAdjacentHTML("beforeend", postHTML);
	*/
	
  // Create the containing <div> element.
  var postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postDiv.setAttribute('data-price', price);
  postDiv.setAttribute('data-city', city);
  postDiv.setAttribute('data-condition', condition);

  // Create the inner post-contents <div> and add it to the post <div>.
  var postContentsDiv = document.createElement('div');
  postContentsDiv.classList.add('post-contents');
  postDiv.appendChild(postContentsDiv);

  /*
   * Create the post-image-container <div> and its <img> contents and add
   * them into the post-contents <div>.
   */
  
  var postImageContainerDiv = document.createElement('div');
  postImageContainerDiv.classList.add('post-image-container');
  postContentsDiv.appendChild(postImageContainerDiv);

  var postImg = document.createElement('img');
  postImg.src = photoURL;
  postImg.alt = description;
  postImageContainerDiv.appendChild(postImg);

  /*
   * Create the post-info-container <div> and all of its contents and add
   * them into the post-contents <div>.
   */
   
  var postInfoContainerDiv = document.createElement('div');
  postInfoContainerDiv.classList.add('post-info-container');
  postContentsDiv.appendChild(postInfoContainerDiv);

  var spaceText1 = document.createTextNode(' ');
  postInfoContainerDiv.appendChild(spaceText1);

  var postPriceSpan = document.createElement('span');
  postPriceSpan.classList.add('post-price');
  postPriceSpan.textContent = textInput;
  postInfoContainerDiv.appendChild(postPriceSpan);

  var spaceText2 = document.createTextNode(' ');
  postInfoContainerDiv.appendChild(spaceText2);

  var postCitySpan = document.createElement('span');
  postCitySpan.classList.add('post-city');
  postCitySpan.textContent = '(' + city + ')';
  postInfoContainerDiv.appendChild(postCitySpan);

  /*
   * Add the new post element into the DOM at the end of the posts <section>.
   */
  
  var postsSection = document.getElementById('posts');
  postsSection.appendChild(postDiv);

}


var bigPostThing = document.getElementById("bigPostContainer");
var createAdivPost = document.createElement("div");
createAdivPost.id = "posts";

var createAnImgDiv = document.createElement("div");
createAnImgDiv.id = "postPhoto";
 