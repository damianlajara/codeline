$(document).ready(function() {
  $('#login-modal').modal('show');
  $('#login-modal').on('shown.bs.modal', function () {
    $('#login-email').focus();
  });
});
