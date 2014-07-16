$(document).ready(function() {
  $('[data-buttons]').on('click', function(event) {
    //get input value
    var  input_value = $('.display').val();
    //get clicked value
    var button_value = $(event.currentTarget).attr('data-buttons');
    //1. check if operator is already on display
    //and at end of string.
    var first_character = input_value.substr(0, 1);
    var last_character = input_value.substr(input_value.length-1, 1);
    var operators = ["/", "*", "-", "+"];
    //2. last character is an operator
    var is_input_operator = operators.indexOf(last_character) > -1;
    var is_button_operator = operators.indexOf(button_value) > -1;
    if(is_input_operator && is_button_operator) {
      input_value = input_value.slice(0, input_value.length-1);
    }
    if(input_value == "" && button_value != "-" && is_button_operator) {
      return;
    }
    // 3. pressing = should evaluate what the value is inside the input.
    //create combined value
    var new_value = input_value+button_value;
    //set input value to combined value
    $('.display').val(new_value);
  });
  //create combined value
  $('#equation').on('click', function() {
    //set input value to combined value
    var total = $('.display').val();
    $('.display').val(eval(total));
  });
  $('.clear').on('click', function() {
    $('.display').val('');
  });
});
