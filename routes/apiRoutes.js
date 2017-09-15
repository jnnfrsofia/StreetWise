// -------------------------------------------------
// **API ROUTES FOR INCIDENTS STORED IN MONGODB**

// Main "/" route that will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

//Get route that grabs all incidents from the DB
app.get('/api/incidents', function(req, res) {

    Incident.find({})
        .exec(function(err, doc) {

            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
});

//Get route that searches for one specific incident by ID
app.get('/api/search/:id', function(req, res) {

    Incident.find({ '_id': req.params.id })
        .exec(function(err, doc) {

            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
});

//Post route that saves a new incident to the DB
app.post('/api/incidents', function(req, res) {

    var newIncident = new Incident({
        date: req.body.title,
        time: req.body.date,
        location: req.body.url,
        harrassmentType: req.body.harrassmentType,
        description: req.body.description
    });

    newIncident.save(function(err, doc) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(doc);
        }
    });

});

//Delete route that removes an incident from the DB
app.delete('/api/incident/:id', function(req, res) {

    Incident.find({ '_id': req.params.id }).remove()
        .exec(function(err, doc) {
            res.send(doc);
        });

});