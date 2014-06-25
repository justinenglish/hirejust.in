$(document).ready(function(){
  $('#add_note').on('click', function(){
    var input = $("#text_input");
      input.focus();
      if(input.val() == "") {
        return;
      }
    $('ul').append("<li>"+input.val()+"</li>");
    input.val("");
  });
  $("#text_input").keyup(function(e){
    if(e.keyCode === 13) {
    var input = $("#text_input");
      input.focus();
      if(input.val() == "") {
        return;
      }
    $('ul').append("<li>"+input.val()+"</li>");
    input.val("");
    }
  })
});
