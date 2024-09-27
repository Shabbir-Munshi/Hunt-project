$(function(){
  // banner slider 
    $('.slick_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        speed: 1000
      });
      // service slider 
      
$('.service_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
  centerMode:true,
  centerPadding: false,
  arrows: true,
  prevArrow: '<i class="fa fa-chevron-up up"></i>',
  nextArrow: '<i class="fa fa-chevron-down down"></i>',
  pauseOnHover: false
});
});