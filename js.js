const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.addEventListener("click", () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
});

// script.js

$(document).ready(function () {
  const carouselSlide = $(".carousel-slide");
  const carouselImages = $(".carousel-slide img");
  const prevButton = $("#prevBtn");
  const nextButton = $("#nextBtn");

  let counter = 0;
  const slideWidth = carouselImages.first().outerWidth();

  nextButton.click(function () {
    if (counter < carouselImages.length - 1) {
      counter++;
    } else {
      counter = 0;
    }

    carouselSlide.css("transform", `translateX(-${slideWidth * counter}px)`);
  });

  prevButton.click(function () {
    if (counter > 0) {
      counter--;
    } else {
      counter = carouselImages.length - 1;
    }

    carouselSlide.css("transform", `translateX(-${slideWidth * counter}px)`);
  });
});

// cancelBtn.addEventListener("click", () => {
//   items.classList.remove("active");
//   menuBtn.classList.remove("hide");
//   searchBtn.classList.remove("hide");
//   cancelBtn.classList.remove("show");
//   form.classList.remove("active");
//   cancelBtn.style.color = "#ff3d00";
// });

// searchBtn.addEventListener("click", () => {
//   form.classList.add("active");
//   searchBtn.classList.add("hide");
//   cancelBtn.classList.add("show");
// });
