// Navigation

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");

navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle("active");
  if (togglerImg.src.includes("hamburger")) {
    togglerImg.src = "./assets/icons/cross.svg";
    navToggler.ariaExpanded = true;
  } else {
    togglerImg.src = "./assets/icons/hamburger.svg";
    navToggler.ariaExpanded = false;
  }
}

// Slideshow

const slideshowImages = document.querySelectorAll(
  ".slideshow-images-container img"
);
const fadeSlideDots = document.querySelectorAll(".fade-slide-dots .dot");

fadeSlideDots.forEach((dot) => dot.addEventListener("click", fadeSlideshow));

let currentFadeIndex = 1;
let fadeIntervalID;

function fadeSlideshow(e) {
  slideshowImages[currentFadeIndex - 1].classList.remove("active");
  fadeSlideDots[currentFadeIndex - 1].classList.remove("active");
  fadeSlideDots[currentFadeIndex - 1].ariaDisabled = "false";

  if (e) {
    currentFadeIndex = e.target.getAttribute("data-fadeIndex");
    clearInterval(fadeIntervalID);
    fadeIntervalID = window.setInterval(fadeSlideshow, 3500);
  } else {
    currentFadeIndex++;
    if (currentFadeIndex > slideshowImages.length) {
      currentFadeIndex = 1;
    }
  }

  slideshowImages[currentFadeIndex - 1].classList.add("active");
  fadeSlideDots[currentFadeIndex - 1].classList.add("active");
  fadeSlideDots[currentFadeIndex - 1].ariaDisabled = "true";
}

fadeIntervalID = window.setInterval(fadeSlideshow, 3500);
