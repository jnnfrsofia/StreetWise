// ajax call to /api/incidents inside onclick 

$(document).ready(function() {
	$("#incidents").on("click", function(e) {
		e.preventDefault();
		console.log("Clicked the button");
		console.log(window.location.origin)
		
		var someShitContainer = document.getElementById("someshit");

		var queryURL = window.location.origin + "/api/incidents"
		console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			console.log(response);

			for (var i=0; i<response.length; i++){
				console.log(response[i]);
				someShitContainer.append(response[i].Description + "\n")
			}
		});
	})
});

// ====================================
// This was here in the origin logic.js
// i saved it in case someone needs it.
// ====================================

// $(document).ready(function() {
//     $('select').material_select();

// });