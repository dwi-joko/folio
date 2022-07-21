$(window).scroll(function () {
  if ($(window).scrollTop() >= 40) {
    $(".header").addClass("fixed");
    // $("header").slideDown(1000);
  } else {
    $(".header").removeClass("fixed");
    // $("header").slideUp(1000);
  }
});
$(document).ready(function () {
  $(".slide-service").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".slide-about").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplaySpeed: 2000,
  });
});
