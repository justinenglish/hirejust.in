$(document).ready(function() {
  var navButtons = $('.nav ul li')
  navButtons.click(function() {
    navButtons.removeClass('selected')
    $(this).addClass('selected')
  });
});
