
function makeGrid() {
  $("#pixelCanvas").html("");
  const height = $("#inputHeight").val();
  const width = $("#inputWidth").val();
  for (i = 0; i < height; i++) {
    $("#pixelCanvas").append("<tr></tr>");
    for (j = 0; j < width; j++) {
      $("#pixelCanvas")
        .children()
        .last()
        .append("<td></td>");
    }
  }
}

// When user clicks 'submit' button, call makeGrid function
$("form#sizePicker").on("submit", function(event) {
  event.preventDefault();
  makeGrid();
});

// When user clicks with selected color on any cell in grid, color it with chosen color
$("#pixelCanvas").on("click", "td", function() {
  $(this).css("background-color", $("#colorPicker").val());
});
