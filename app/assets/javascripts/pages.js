// Knob handler file
$(document).ready(function() {
  initializeKnobs();
  $("#color").css('height', '500px')
});

function initializeKnobs() {
  $("#red").knob(getKnobOptions($("#red")))
  $("#green").knob(getKnobOptions($("#green")))
  $("#blue").knob(getKnobOptions($("#blue")))
}

function getKnobOptions(obj) {
  var options =  {
    'min': 0,
    'max': 255,
    'fgColor': obj.attr("id"),
    'change' : function(v) {
      setColor();
    }
  };
  return options;
}

function setColor() {
  var red = $("#red").val()
  var green = $("#green").val()
  var blue = $("#blue").val()
  $("#color").css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')
}
