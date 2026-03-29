
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loader").classList.add("fade-out");
    }, 1500); // delay for logo show
  });

  window.addEventListener("scroll", function () {
  const nav = document.querySelector(".custom-navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});




// Hero Section 
const buttons = document.querySelectorAll(".hero-menu button");
const carousel = document.querySelector("#heroCarousel");

carousel.addEventListener("slid.bs.carousel", function (e) {
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[e.to].classList.add("active");
});