$(function() {
  $("#slider").slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "myDots",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        slidesToShow: 1,
        slidesToScroll: 1,
        settings: {
          arrows: true
        }
      }
    ]
  });

  $("#sliderTestimonials").slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "myDots"
  });

  $("#btnOpen").on("click", function() {
    $("#menu").slideToggle();
  });
});

if (location.host !== "rogue-chefs.matviy.pp.ua") {
  document.body.innerHTML = "";
}
