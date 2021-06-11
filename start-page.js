var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("parag");
  var dots = document.getElementsByClassName("noguma-pomoki-kadra");
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace("deystvuyus", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " deystvuyus";
}




var slider = 1;
Slider(slider);

function plusSlider() {
  Slider(slider += 1);
}

function minusSlider() {
  Slider(slider -= 1);  
}

function currentSlide(n) {
  Slider(slider = n);
}

function Slider(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("noguma");
  if (n > slides.length) {
  slider = 1
  }
  if (n < 1) {
  slider = slides.length
  }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace("deystvuyus", "");
  }
  slides[slider - 1].style.display = "block";
  dots[slider - 1].className += " deystvuyus";
}


var popup = document.getElementById('main-popup');
var popupBtn = document.getElementById('open-popup');

const timeout = 800;

popupBtn.addEventListener('click' , function(event) {
  event.preventDefault()
  popup.classList.remove('close')
    popup.classList.add('main-popup', 'open')

})



var popupBtnClose = document.getElementById('btn-close-popup');

popupBtnClose.addEventListener('click' , function() {
  popup.classList.remove('open')
  popup.classList.add('main-popup', 'close')
})






