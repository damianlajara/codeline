// $(document).ready(function() {
//   // $('#login-modal').modal('show');
//   // $('#registration-modal').modal('show');
//
//   $('#registration-modal').modal({
//     keyboard: false,
//     backdrop: 'static'
//   });
//
//   $('#login-modal').modal({
//     keyboard: false,
//     backdrop: 'static'
//   });
//
//   // Focus on the first input of every modal
//   $('#login-modal').on('shown.bs.modal', function () {
//     $('#login-email').focus();
//   });
//
//   $('#registration-modal').on('shown.bs.modal', function () {
//     $('#registration-username').focus();
//   });
//
//
// });

// $(document).ready(function() {
//   $( "#registration-modal" ).load(function() {
//     $('#registration-modal').modal({
//       keyboard: false,
//       backdrop: 'static'
//     });
//     // Focus on the first input of every modal
//     $('#registration-modal').on('shown.bs.modal', function () {
//       $('#registration-username').focus();
//     });
//   });
//
//   $( "#login-modal" ).load(function() {
//     $('#login-modal').modal({
//       keyboard: false,
//       backdrop: 'static'
//     });
//     // Focus on the first input of every modal
//     $('#login-modal').on('shown.bs.modal', function () {
//       $('#login-email').focus();
//     });
//   });
// });

// $(document).on('hidden.bs.modal', function (e) {
//     $(e.target).removeData('bs.modal');
// });
//
// $(document).on('shown.bs.modal', function (e) {
//     $(e.target).modal('show');
// });

// $(window).on("load", function(){
//   $('#registration-modal').modal({
//     keyboard: false,
//     backdrop: 'static'
//   });
//
//   $('#login-modal').modal({
//     keyboard: false,
//     backdrop: 'static'
//   });
//
//   // Focus on the first input of every modal
//   $('#login-modal').on('shown.bs.modal', function () {
//     $('#login-email').focus();
//   });
//
//   $('#registration-modal').on('shown.bs.modal', function () {
//     $('#registration-username').focus();
//   });
//
// });

$(document).ready(function() {
  $('.modal').on('shown', function() {
     (this).find('input').first().focus();
  });
});
