$(document).ready(function() {
    $('select').material_select();

//**REPORT FORM LOGIC**

// activates submit button on report form page
    $('#submit').on('click', function(event) {
        event.preventDefault();
        // gather form inputs
        var formInput = {
            harassment_type: $('#harassmentType').val().trim(),
            location: $('#location_input').val().trim(),
            date: $('date_input').val().trim(),
            time: $('time_input').val().trim(),
            description: $('desc_input').val().trim()
        };
        // console.log('formInput = ' + JSON.stringify(userInput));
        // adds user inputs to incidents API
        $.post('/api/incidents', formInput)
            .done(function(data) {
                // console.log('response = ' + JSON.stringify(data));


            });

    });
});