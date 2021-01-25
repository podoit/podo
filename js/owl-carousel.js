$(document).ready(function() {

  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000 * 60 * 60,
    autoplayHoverPause: true,

    responsive: {
      0: {
      items: 2,
      },
      600: {
      items: 4,
      }
    }

  });

  $('.play').on('click', function() {
  owl.trigger('play.owl.autoplay', [1000])
  })

  $('.stop').on('click', function() {
  owl.trigger('stop.owl.autoplay')
  })

})