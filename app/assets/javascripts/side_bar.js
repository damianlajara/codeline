$(document).on('page:change', function() {
  // Listen to this event since were using turbolinks
  // Look at: http://railscasts.com/episodes/390-turbolinks
  $('[data-toggle=offcanvas]').click(function() {
    console.log("Toggling between active class!")
    $('.row-offcanvas.row-offcanvas-left').toggleClass('active');
  });
});
