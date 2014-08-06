var Currency = {

  selected_currency: '',
  input: $('#input_box'),
  output: $('#output_box'),
  dropdown: $('.dropdown-menu li'),

  init: function() {
    //bind LI's to click_handler
    var self = this;
    this.dropdown.click(function(event) {
      self.click_handler(event);
    });
  },
  // when a user clicks an li in the convert to dropdown
  // take the value they clicked and save it to a variable/property
  click_handler: function(event) {
    this.selected_currency = $(event.currentTarget).attr('data-currency');
    this.output_value();
  },

  // 1. get the input value
  input_value: function() {
    return this.input.val();
  },

  // 2. when a currency type is selected take the input value * that currency
  calculation: function() {
    if(this.selected_currency === "canadian") {
      return this.input_value() * 1.09;
    }else if(this.selected_currency === "euro") {
      return this.input_value() * 0.75;
    }else if(this.selected_currency === "peso") {
      return this.input_value() * 13.20;
    }else {
      return this.input_value() * 102.55;
    }
  },
  // 3. display that currency value to the output box
  output_value: function() {
    this.output.val(this.calculation());
  }

}

$(document).ready(function(){
  Currency.init();
});
