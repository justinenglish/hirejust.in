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
  notes.push(input.val());
  notes.reverse();
  localStorage.setItem("notes", JSON.stringify(notes));
  append_notes();
  input.val("");
}


$(document).ready(function() {
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
