$(document).ready(function() {
  window.videos = [];
  var navButtons = $('.nav ul li')
  navButtons.click(function() {
    navButtons.removeClass('selected')
    $(this).addClass('selected')
  });
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=Blizzard%20Diablo%203', function(diablo) {
    /*for(x = 0; x < diablo.items.length; x++) {
      $('diablo').append($('boxes li'));
    }*/
    videos = videos.concat(diablo.items)
    console.log(diablo);
  });

  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=World%20of%20Warcraft', function(wow) {
    /*for(x = 0; x < wow.items.length; x++) {
      $('wow').append($('boxes li'));
    }*/
    videos = videos.concat(wow.items)
    console.log(wow);
  });


  // Loop over the variable and output it to the grid (grey blocks)
  window.outputToGrid = function(videos) {
    for(x = 0; x < videos.length; x++) {
      $('.boxes ul').append('<li style="background-image: url('+videos[x].snippet.thumbnails.default.url+')">' +videos[x].snippet.title+ '</li>')
      console.log(videos[x].snippet.title)
      //videos[]
    }
  }

});
