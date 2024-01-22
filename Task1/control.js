let slides = document.querySelectorAll(".slide");
let btnSlides = document.querySelectorAll(".b-btns");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let change = 0;
let countSlides = slides.length;

// inialization for slides

slides[0].style.zIndex = "1";
btnSlides[0].style.backgroundColor = "#777";

// inialization for slides

// Add for Events
btnNext.addEventListener("click", slideNext);

btnPrev.addEventListener("click", slidePrev);

for (var i = 0, len = btnSlides.length; i < len; i++) {
  btnSlides[i].addEventListener("click", btnChange);
}
// Add for Events

function slideNext() {
  if (change < countSlides - 1) {
    change++;
    changeSlide(change);
  } else {
    change = 0;
    changeSlide(change);
  }
}

function slidePrev() {
  if (change > 0) {
    change--;
    changeSlide(change);
  } else {
    change = 2;
    changeSlide(change);
  }
}

function clearEffact() {
  for (var i = 0, len = btnSlides.length; i < len; i++) {
    slides[i].style.zIndex = "0";
    btnSlides[i].style.backgroundColor = "#fff";
  }
}

function changeSlide(cha) {
  change = cha;
  clearEffact();
  slides[change].style.zIndex = "1";
  btnSlides[change].style.backgroundColor = "#777";
}

function btnChange() {
  if (this.id == "btn-slide1") changeSlide(0);
  else if (this.id == "btn-slide2") changeSlide(1);
  else changeSlide(2);
}
