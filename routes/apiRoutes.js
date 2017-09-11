// -------------------------------------------------
// **API ROUTES FOR INCIDENTS STORED IN MONGODB**

// Main "/" route that will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

//Get route that grabs all incidents from the DB
app.get('/api/incidents', function(req, res) {

   
});

//Get route that searches for one specific incident by ID
app.get('/api/search/:id', function(req, res) {

   
});

//Post route that saves a new incident to the DB
app.post('/api/incidents', function(req, res) {

    

});

//Delete route that removes an incident from the DB
app.delete('/api/incident/:id', function(req, res) {

    
});