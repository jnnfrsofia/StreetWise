// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(info) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  info.forEach(function(info) {
    // Append each of the info's properties to the table
    $("tbody").append("<tr><td>" + info._id + "</td>" +
                         "<td>" + info.dateandTime + "</td>" +
                         "<td>" + info.location + "</td>" +
                         "<td>" + info.typeofHarassment + "</td>")
  });
}

// Bonus function to change "active" header
function setActive(selector) {
  // remove and apply 'active' class to distinguish which column we sorted by
  $("th").removeClass("active");
  $(selector).addClass("active");
}

// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#id-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#info-_id");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/id", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#dateandTime-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#info-dateandTime");

  // Do an api call to the back end for json with all animals sorted by name
  $.getJSON("/date", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the weight sort button, display table sorted by weight
$("#location-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#info-location");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/location", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the weight sort button, display table sorted by weight
$("#typeofHarassment-sort").on("click", function() {
  // Set new column as currently-sorted (active)
  setActive("#info-typeofHarassment");

  // Do an api call to the back end for json with all animals sorted by weight
  $.getJSON("/type", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});