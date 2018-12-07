
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
var submitButt = document.getElementById("submit-butt");

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

console.log("rrrrrrrrr ", userInputTextPost);

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

userInputTextPost;

submitButt.addEventListener('click', function(event){
	//modal info 
	console.log("goat ", userInputTextPost);

 var description = document.getElementById('userInpText').value;
 var photoURL = document.getElementById('photoURLinput').value;
	
	console.log('creating post');
	console.log('description: ', description);
	console.log('url: ', photoURL);


	if(description == "" || photoURL == ""){
		alert("One or more fields are missing");
	}else{
		
	parent = document.getElementById('posts');
    var postInfoContainer = document.createElement('div');
    postInfoContainer.id = 'post';
    parent.appendChild(postInfoContainer)

	
	var newDescription = document.createTextNode(description.value);
    var newPhotoURL = document.createElement("img");
    newPhotoURL.src = photoURL;
	var newPost = document.createElement('div');
   	newPost.classList.add('post');

    postInfoContainer.appendChild(newPhotoURL);

	
	var postImageContainer = document.createElement('div');
	postImageContainer.classList.add('post-image-container');
	newPost.appendChild(postImageContainer);
	
	var postImage = document.createElement('img');
	postImage.classList.add('post-image-container');
    var description = document.getElementById('userInpText').value;
    var photoURL = document.getElementById('photoURLinput').value;
       
       console.log('creating post');
       console.log('description: ', description);
       console.log('url: ', photoURL);
   
   
       if(description == "" || photoURL == ""){
           alert("One or more fields are missing");
       }else{
           
       motherBlorg = document.getElementById('blorgs');
       var postSpan = document.createElement('span');
       postSpan.classList.add('menu-items');
       motherBlorg.appendChild(postSpan);
       
       var contentDiv = document.createElement('div');
       contentDiv.classList.add('post-class');
       motherBlorg.appendChild(contentDiv);
       
       var imageDiv = document.createElement('div');
       imageDiv.classList.add('photo-class');
       contentDiv.appendChild(imageDiv);
       
       var postImage = document.createElement('img');
       postImage.src = photoURL;
       imageDiv.appendChild(postImage);
       
       var textContainerDiv = document.createElement('div');
       textContainerDiv.classList.add('text-class');
       contentDiv.appendChild(textContainerDiv);
       
       var postContents = document.createElement('div');
       postContents.classList.add('post-contents');
       newPost.appendChild(postInfoContainer);
       newPost.appendChild(postContents);
       
       var content = document.createElement('p');
       content.classList.add('cool-story');
       content.textContent = description;
       postContents.appendChild(content);
       
       var postsSection = document.getElementById('blorgs');
       blogSection.appendChild(postSpan);
               
           modal.style.display ='none';
               
       }
   }});
   
   

//******************************End of Modal listener stuff*********************


//***************Text Input listener things ********************//



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
  /*
  var postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postDiv.setAttribute('data-price', price);
  postDiv.setAttribute('data-city', city);
  postDiv.setAttribute('data-condition', condition);
*/

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
  postImageContainerDiv.appendChild(postImg);

  /*
   * Create the post-info-container <div> and all of its contents and add
   * them into the post-contents <div>.
   */
   
  var postInfoContainerDiv = document.createElement('div');
  postInfoContainerDiv.classList.add('post-info-container');
  postContentsDiv.appendChild(postInfoContainerDiv);

  var postTextSpan = document.createElement('span');
  postPriceSpan.textContent = textInput;
  postInfoContainerDiv.appendChild(postPriceSpan);

  var postCatSpan = document.createElement('span');
  postCitySpan.textContent = '(' + category + ')';
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
