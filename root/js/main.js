var item;
function choose(choice){
item = 5;
localStorage.setItem("key", item);
}
/*Loads the first slide automatically*/
window.onload = function() {
	item = 1;
	showSlides(item)
};
/*switches the modes from nav bar to dropdown list*/
function Dropdown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var slideIndex = 1;



function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  /*Gets all of the items in the current html file with the class slide (the large images)*/
  var slides = document.getElementsByClassName("Slides");
  /*Gets all of the items in the current html file with the class select (the small images)*/
  var active = document.getElementsByClassName("select");
  var captionText = document.getElementById("caption");
  /*Uses an array which is then looped through to check if its outside the bounds when the plus or minus 
  arrow is used*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*Makes the current small image "active" so the opacity is set to 1*/
  for (i = 0; i < active.length; i++) {
    active[i].className = active[i].className.replace(" active", "");
  }
  /*Makes the current large image "active" so the image is shown */
  slides[slideIndex-1].style.display = "block";
  active[slideIndex-1].className += " active";
  captionText.innerHTML = active[slideIndex-1].alt;
}
