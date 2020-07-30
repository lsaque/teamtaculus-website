// Incializando Slider
  $(document).ready(function(){
    $('.slick-carousel').slick({
      centerMode: true,
      centerPadding: '60px',
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
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
