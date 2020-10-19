// Incializando Slider
$(document).ready(function () {
  $('.slick-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    initialSlide: 2,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});