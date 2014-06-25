var notes = JSON.parse(localStorage.getItem("notes")) || [];
var append_notes = function() {
  $('hr').remove();
  $('ul li').remove();
  for(i = 0; i < notes.length; i++) {
    $('ul').append("<li>"+notes[i]+"</li>"+"<hr>");
  }
}
var storage = function() {
  var input = $("#text_input");
  input.focus();
  if(input.val() == "") {
    return;
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  notes.push(input.val());
  input.val("");
  append_notes();
}


$(document).ready(function(){
  append_notes();
  $('#add_note').on('click', function(){
    storage();
  });
  $("#text_input").keyup(function(e){
    if(e.keyCode === 13) {
      storage();
    }
  })
});
