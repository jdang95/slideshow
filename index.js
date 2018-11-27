var myImages =[ "http://smartfamilypets.com/wp-content/uploads/2015/12/Chow-chow-puppies-513x330.jpg","http://adogbreeds.com/wp-content/uploads/2012/12/Pembroke-Welsh-Corgi-Puppies-Play-at-Black-Gravel.jpg","https://i.pinimg.com/originals/60/52/e4/6052e467f4d6755cc58321273cbfa5c8.jpg","https://global-free-classified-ads-s02.r.worldssl.net/user_images/1102139.jpg","https://puppyspot-photos-prod.s3.us-west-2.amazonaws.com/breeds/245/card/500000291_medium.jpg"];


var captionImages =["ChowChow","Corgi","BullDog","Yorki","Husky"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
