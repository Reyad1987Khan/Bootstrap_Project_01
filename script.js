
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
// const buttons = document.querySelectorAll(".hero-menu button");
// const carousel = document.querySelector("#heroCarousel");

// carousel.addEventListener("slid.bs.carousel", function (e) {
//   buttons.forEach(btn => btn.classList.remove("active"));
//   buttons[e.to].classList.add("active");
// });


// document.addEventListener("DOMContentLoaded", function () {

//   // সব button select
//   const buttons = document.querySelectorAll(".hero-menu button");

//   // carousel element
//   const carouselElement = document.querySelector("#heroCarousel");

//   // Bootstrap carousel instance
//   const carousel = new bootstrap.Carousel(carouselElement);

//   // 🔥 1. Button click করলে slide change হবে
//   buttons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       carousel.to(index); // নির্দিষ্ট slide এ যাবে

//       // active class update
//       buttons.forEach(btn => btn.classList.remove("active"));
//       button.classList.add("active");
//     });
//   });

//   // 🔥 2. Slide change হলে button auto update হবে
//   carouselElement.addEventListener("slid.bs.carousel", function (e) {
//     buttons.forEach(btn => btn.classList.remove("active"));
//     buttons[e.to].classList.add("active");
//   });

// });



document.addEventListener("DOMContentLoaded", function () {

  const carouselEl = document.querySelector("#heroCarousel");
  const carousel = new bootstrap.Carousel(carouselEl);

  const menu = document.getElementById("menuContainer");
  const buttons = document.querySelectorAll(".menu-item");

  // =========================
  // BUTTON CLICK → SLIDE
  // =========================
  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const index = this.dataset.index;
      carousel.to(index);
      setActive(index);
      centerButton(this);
    });
  });

  // =========================
  // SLIDE CHANGE → BUTTON SYNC
  // =========================
  carouselEl.addEventListener("slid.bs.carousel", function (e) {
    setActive(e.to);
    centerButton(buttons[e.to]);
  });

  function setActive(index) {
    buttons.forEach(b => b.classList.remove("active"));
    buttons[index].classList.add("active");
  }

  function centerButton(btn) {
    const containerWidth = menu.offsetWidth;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;

    menu.scrollTo({
      left: btnLeft - containerWidth / 2 + btnWidth / 2,
      behavior: "smooth"
    });
  }

  // =========================
  // DRAG / TOUCH SCROLL
  // =========================
  let isDown = false;
  let startX;
  let scrollLeft;

  menu.addEventListener("mousedown", (e) => {
    isDown = true;
    menu.classList.add("active-drag");
    startX = e.pageX - menu.offsetLeft;
    scrollLeft = menu.scrollLeft;
  });

  menu.addEventListener("mouseleave", () => {
    isDown = false;
    menu.classList.remove("active-drag");
  });

  menu.addEventListener("mouseup", () => {
    isDown = false;
    menu.classList.remove("active-drag");
  });

  menu.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - menu.offsetLeft;
    const walk = (x - startX) * 2;
    menu.scrollLeft = scrollLeft - walk;
  });

  // touch support
  menu.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - menu.offsetLeft;
    scrollLeft = menu.scrollLeft;
  });

  menu.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - menu.offsetLeft;
    const walk = (x - startX) * 2;
    menu.scrollLeft = scrollLeft - walk;
  });

});

