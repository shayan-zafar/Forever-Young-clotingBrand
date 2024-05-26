

/////herosection swiper//////
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: "true",

    autoplay: {
      delay:3000,
      // disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

///////////////////product cards sect///////
var swiper = new Swiper("#cards-carousel", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  breakpoints: {
      // when window width is xs lessthan576px
     0:{
         slidesPerView: 1,
     },
     // when window width is sm576px
     576: {
       slidesPerView: 2,
     },
     // when window width is md768
     768: {
       slidesPerView: 3,
     },
     // when window width is lg992
     992: {
         slidesPerView: 4,
       },

     // when window width is >= 1280px
     1280: {
       slidesPerView: 4,
     }
   }

});
