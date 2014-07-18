var Calculator = {
  display:  $('.display'),
  btn_clear: $('.clear'),
  btn_total: $('#total'),
  btn_data: $('[data-buttons]'),
  operators: ["/", "*", "-", "+"],

  init: function () {
    var self = this;
    this.btn_data.click(function(event) {
      self.btn_data_click_handler(event);
    });
    this.btn_clear.click(function() {
      self.clear();
    });
    this.btn_total.click(function() {
      self.total();
    });
  },
  total: function () {
    return this.display.val(eval(this.input_value()));
  },
  clear: function () {
    return this.display.val('');
  },
  input_value:  function () {
    return this.display.val();
  },
  button_value: function (event) {
    return $(event.currentTarget).attr('data-buttons');
  },
  first_character: function () {
    return this.input_value().substr(0, 1);
  },
  last_character: function() {
    return this.input_value().substr(this.input_value().length-1, 1);
  },
  btn_data_click_handler: function (event) {
    if(this.operators.indexOf(this.last_character()) > -1 && this.operators.indexOf(this.button_value(event)) > -1) {
      this.input_value().slice(0, this.input_value().length-1);
    }
    if(this.input_value() == "" && this.button_value(event) != "-" && this.operators.indexOf(this.button_value(event)) > -1) {
      return;
    }
    var new_value = this.input_value()+this.button_value(event);
    this.display.val(new_value);
  }
}

$(document).ready(function() {
  Calculator.init();
});
