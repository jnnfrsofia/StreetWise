# StreetWise

## Overview

StreetWise is a web and mobile app where people can report street harassment incidents and also view street harassment incidents in their area.

The application uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) on the back end, and the [Materialize](http://materializecss.com/getting-started.html) CSS framework and [jQuery](https://jquery.com) on the front end.

## Demo
	
StreetWise is deployed to [Heroku](https://streetwiseapp.herokuapp.com/).

1. Once you click the link to the deployed site, you will see the home page where there is a Google Maps with markers of previously saved incidents as well as buttons to Report an Incident or View Incidents

	<img src="/img/pic1.PNG" alt=sql-1>

2. When you click Report Incident, you will be taken to a map that has an "Enter a location" submission field on top. This is where you can input the address of the incident.

	<img src="/img/pic2.PNG" alt=sql-1>

3. After typing an address, the map will populate a marker of the location you specified. This marker can be dragged if the location is not exactly where you wanted.

	<img src="/img/pic3.PNG" alt=sql-1>

4. Clicking on the marker will pull up the submission form for the Incident Report. Fill out the fields.

	<img src="/img/pic4.PNG" alt=sql-1>

5. Hit the "Report" button and your incident will be saved to the database and displayed on the View Incidents page along with the other incidents.

	<img src="/img/pic5.PNG" alt=sql-1>

## Installation

To install the application follow the instructions below:

	git clone https://github.com/claire181/StreetWise.git
	cd StreetWise
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=3000
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.