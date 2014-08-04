window.Videos = (function () {
  var videos = [],
      videoBoxes = $('.boxes'),
      navButtons = $('.nav ul li'),
      searchInput = $('.searchform .search');

  function load_video() {
    var videoId = $(this).attr('videoId')
    window.player.loadVideoById(videoId)
  }

  function nav_bg() {
    var self = $(this),
        type = self.attr('type');

    navButtons.removeClass('selected')
    self.addClass('selected')
    render(videos, type);
  }

  function search() {
    var value = $(this).val(),
        type = $('.nav ul li.selected').attr('type'),
        results = [];

    for(x = 0; x < videos.length; x++) {
      if(videos[x].snippet.title.toLowerCase().search(value) != -1) {
        results.push(videos[x])
      }
    }
    render(results, type);
  }

  function diablo() {
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=Blizzard%20Diablo%203%20Gameplay', function(diablo) {
      for(x = 0; x < diablo.items.length; x++) {
        diablo.items[x].type = 'diablo'
      }
      videos = videos.concat(diablo.items)
    });
  }

  function wow() {
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&key=AIzaSyCPBNiDrBlRIikP0OLD-uV9rVUl6WE2jH8&q=World%20of%20Warcraft%20Gameplay', function(wow) {
      for(x = 0; x < wow.items.length; x++) {
        wow.items[x].type = 'wow'
      }
      videos = videos.concat(wow.items)

      //improve code below

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
  }

  function render(videos, type) {
    // think about the selectors, do they get used elsewhere?
    $('.boxes ul li').remove()
    for(x = 0; x < videos.length; x++) {
      if(videos[x].type === type) {
        var bg_url = videos[x].snippet.thumbnails.default.url,
            vid_id = videos[x].id.videoId,
            vid_title = videos[x].snippet.title;
        // create a variable for long object accessors
        $('.boxes ul').append('<li videoid="'+vid_id+'" style="background-image: url('+bg_url+')">' +vid_title+ '<div class="playbutton"></div></li>')
      }
    }
  }
  render();
  diablo();
  wow();
  videoBoxes.on('click', 'li', load_video);
  navButtons.click(nav_bg);
  searchInput.on('keyup', search);
});
// compare module design test and implement a return object for public
// accessors.
Videos();
