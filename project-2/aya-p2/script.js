$(document).ready(function(){
  $('.hero-home').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
});

$('.comics-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
});

$('.comics-carousel2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
});

"use strict"

function toggleIcon() {
  $(".icon").on("click", function () {
    $(".icon").toggleClass("active")
    $(".menu-mobile").slideToggle(300)
  })
}

function closeMobileMenu() {
  $(".menu-mobile").on("click", "a", function () {
    $(".icon").trigger("click")
  })
}


function desktopMenu() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50 && $(window).width() > 768) {
      $("nav.desktop").fadeIn(500)
    }
  })

}

//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)
$(desktopMenu)