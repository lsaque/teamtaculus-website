// Incializando Slider
  $(document).ready(function(){
    $('.slick-carousel').slick({
      centerMode: true,
      centerPadding: '60px',
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
        {
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
