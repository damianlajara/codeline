$(function() {
  $('#off-canvas-button').click(function() {
    console.log("clicked on toggle sidebar")
    if($(".row-offcanvas").hasClass("active")) {
      console.log("removing active");
      $(".row-offcanvas").removeClass('active');
    } else {
      console.log("adding active");
      $(".row-offcanvas").addClass('active');
    }
  });
});
