$(document).ready(function() {
  var navButtons = $('.nav ul li')
  navButtons.click(function() {
    navButtons.removeClass('selected')
    $(this).addClass('selected')
  });
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=Blizzard%20Diablo%203', function(diablo) {
    console.log(diablo);
  });

  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=World%20of%20Warcraft', function(wow) {
    console.log(wow);
  });
});
