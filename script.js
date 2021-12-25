$('.best_offer').slick({
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"><i class="far fa-arrow-circle-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="far fa-arrow-circle-right"></i></div>',
    autoplay: true,
    autoplaySpeed:2000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint:1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
          
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1,
        }
      }
    ]
  });