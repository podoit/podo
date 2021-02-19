// includeHTML();

// year updater
var n = new Date();
var y = n.getFullYear();
document.getElementById("copyright").innerHTML = y + " © PODO-IT";

// scroll action
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || 50 > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// open template
function pdOpenSample() {
  document.getElementById("pdSample").style.display = "block"
}
function pdCloseSample() {
  document.getElementById("pdSample").style.display = "none"
}

// main slide
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("bg-image");
  var dots = document.getElementsByClassName("dot");

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" showing", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].className += " showing";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000);
}

// clock
var myTimer = setInterval(myClock, 1000);
function myClock() {
  document.getElementById("demo").innerHTML = new Date().toLocaleTimeString();
}

// netlify form
document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', { 
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}