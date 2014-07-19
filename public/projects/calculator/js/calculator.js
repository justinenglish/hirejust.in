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
    return this.display.val(eval(this.value()));
  },
  clear: function () {
    return this.display.val('');
  },
  value:  function () {
    return this.display.val();
  },
  first_character: function () {
    return this.value().substr(0, 1);
  },
  last_character: function() {
    return this.value().substr(this.value().length-1, 1);
  },
  btn_data_click_handler: function (event) {
    var btn_value = $(event.currentTarget).attr('data-buttons'),
        last_is_operator = this.operators.indexOf(this.last_character()) > -1,
        click_is_operator = this.operators.indexOf(btn_value) > -1,
        new_value = this.value();

    if(last_is_operator && click_is_operator) {
      new_value = this.value().slice(0, this.value().length-1);
    }
    if(new_value == "" && btn_value != "-" && click_is_operator) {
      return;
    }
    this.display.val(new_value + btn_value);
  }
}

$(document).ready(function() {
  Calculator.init();
});
