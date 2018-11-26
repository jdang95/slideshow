var myImages =["https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjp2M24ifHeAhXcHzQIHUIMCh0QjRx6BAgBEAU&url=https%3A%2F%2Fthehappypuppysite.com%2Fshar-pei%2F&psig=AOvVaw11coACicb41XBqCFf7FM_F&ust=1543287789444636","https://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg","https://www.card.com/sites/default/files/styles/card_gallery_image_medium/public/Card-DisseroBrands-14.jpg?itok=ammQy10m","https://global-free-classified-ads-s02.r.worldssl.net/user_images/1102139.jpg","https://st2.depositphotos.com/2892507/7444/i/950/depositphotos_74448903-stock-photo-husky-puppy.jpg"];


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
