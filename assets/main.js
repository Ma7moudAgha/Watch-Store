/////////////////////////////// swiper
  function myFunction(x) {
    if (x.matches) { // If media query matches
      /***  Initialize Swiper **/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 65,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // autoplay:{
        //   delay:3000,
        //         },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      /***  Initialize Swiper **/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 61,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // autoplay:{
        //   delay:3000,
        //         },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
  
  
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes







/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  reset: true
});

sr.reveal('.card , .hero_left , .contact_png ,.swiper , .hero_imgs , .about_s_right ', {
  interval: 200
})


ScrollReveal({ distance: '65px' });
ScrollReveal().reveal('.about_man_right , .about_w_right , .hero_imgw , .about_text', { origin: 'right' });
ScrollReveal().reveal('.img_about , .text_hero_man , .about_man_left , .hero_left_w , .about_w_left , .hero_left_s , .about_s_left , .card_3d', { origin: 'left' });




// ================scroll top================//

let span = document.querySelector(".up");
window.onscroll =function(){
  if (this.scrollY >= 1000){span.classList.add("show");}
  else {span.classList.remove("show");}
};

span.onclick = function()
{
  window.scrollTo({top:0 , behavior:"smooth"})
}
