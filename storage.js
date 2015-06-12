$(document).ready(function () {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"]);
    }
    if (localStorage["email"]) {
      $('#email').val(localStorage["email"]);
    }
    if (localStorage["phone"]) {
      $('#phone').val(localStorage["phone"]);
    }
    if (localStorage["street1"]) {
      $('#street1').val(localStorage["street1"]);
    }
    if (localStorage["street2"]) {
      $('#street2').val(localStorage["street2"]);
    }
    if (localStorage["city"]) {
      $('#city').val(localStorage["city"]);
    }
    if (localStorage["state"]) {
      $('#state').val(localStorage["state"]);
    }
    if (localStorage["zip"]) {
      $('#zip').val(localStorage["zip"]);
    }
  }
  init();
});

$('.stored').keyup(function () {
  localStorage[$(this).attr('name')] = $(this).val();
});

$('#localStorageTest').submit(function() {
  localStorage.clear();
});
