$(".best_offer").slick({
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slick-prev"><i class="far fa-arrow-circle-left"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="far fa-arrow-circle-right"></i></div>',
  autoplay: true,
  autoplaySpeed: 2000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

var checkbox = document.querySelector('.tog_switch');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}