// Magnific PopUp

$(function() {

  $('#favorite-destinations').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide "back-to-top button"
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();

        } else {
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scroll

// $(function() {
//   $("a.smooth-scroll").click(function (event) {

//       event.preventDefault();

//       var section = $(this).attr("href");

//       $('html, body').animate({
//         scrollTop: $(section).offset().top - 98
//       }, 1250, "easeInOutExpo");
//   });
// });