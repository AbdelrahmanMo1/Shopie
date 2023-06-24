let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
   sideBar.classList.toggle("active");
}

document.querySelector("#close-side-bar").onclick = () => {
   sideBar.classList.remove("active");
}


let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
   searchForm.classList.toggle("active");
}

window.onscroll = () => {
   sideBar.classList.remove("active");
   searchForm.classList.remove("active");
}

var swiper = new Swiper(".home-slider", {

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },

});


var swiper = new Swiper(".about-slide", {
   slidesPerView: 3,
   spaceBetween: 55,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      350: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      450: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      768: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});


let eye = document.querySelector(".fa-eye");
let pass = document.querySelector("#password");

eye.onclick = () => {

   if (pass.type === "password") {

      pass.type = "text";
      eye.classList.add("fa-eye-slash");

   } else {

      eye.classList.remove("fa-eye-slash");
      pass.type = "password";

   }
}