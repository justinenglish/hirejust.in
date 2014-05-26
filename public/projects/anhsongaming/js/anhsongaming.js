$(document).ready(function() {
  window.videos = [];
  var videoBoxes = $('.boxes')
  var navButtons = $('.nav ul li')
  var searchInput = $('.searchform .search')
  videoBoxes.on('click', 'li', function() {
    var videoId = $(this).attr('videoId')
    window.player.loadVideoById(videoId)
  });
  navButtons.click(function() {
    var type = $(this).attr('type')
    console.log(type)
    navButtons.removeClass('selected')
    $(this).addClass('selected')
    outputToGrid(videos, type);
  });
  searchInput.on('keyup', function(){
    var value = $(this).val()
    var type = $('.nav ul li.selected').attr('type')
    var results = []
    for(x = 0; x < videos.length; x++) {
      if(videos[x].snippet.title.toLowerCase().search(value) != -1) {
        results.push(videos[x])
      }
    }
    outputToGrid(results, type);
  });
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=Blizzard%20Diablo%203%20Gameplay', function(diablo) {
    for(x = 0; x < diablo.items.length; x++) {
      diablo.items[x].type = 'diablo'
    }
    videos = videos.concat(diablo.items)
    console.log(diablo);
  });

  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=World%20of%20Warcraft%20Gameplay', function(wow) {
    for(x = 0; x < wow.items.length; x++) {
      wow.items[x].type = 'wow'
    }
    videos = videos.concat(wow.items)
    console.log(wow);
    $('li[type=wow]').click()
    var videoId = $('.boxes li:first').attr('videoId')
    window.player = new YT.Player('player', {
      height: '390',
      width: '1046',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  });


  // Loop over the variable and output it to the grid (grey blocks)
  window.outputToGrid = function(videos, type) {
    $('.boxes ul li').remove()
    for(x = 0; x < videos.length; x++) {
      if(videos[x].type === type) {
        $('.boxes ul').append('<li videoid="'+videos[x].id.videoId+'" style="background-image: url('+videos[x].snippet.thumbnails.default.url+')">' +videos[x].snippet.title+ '<div class="playbutton"></div></li>')
        console.log(videos[x].snippet.title)
      }
    }
  }
});
