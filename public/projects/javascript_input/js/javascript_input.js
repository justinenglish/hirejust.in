$(document).ready(function() {
  $('.comma_list').on('click', function(){
    var list = prompt("Provide a comma delimited list: (example: apples, oranges, pineapple)");
    var splits = list.split(",");
    for(i = 0; i < splits.length; i++) {
      $('ul').append("<li>"+splits[i]+"</li>");
    }
  });
});
