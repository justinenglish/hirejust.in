$(document).ready(function() {
  $('.buttons ul li').on('click', function(event) {
    //get input value
    var  input_value = $('.display').val();
    //get clicked value
    var button_value = $(event.currentTarget).attr('data-buttons');
    //create combined value
    var new_value = input_value+button_value;
    //set input value to combined value
    $('.display').val(new_value);
  });
  $('.clear').on('click', function() {
    $('.display').reset();


  });
});
