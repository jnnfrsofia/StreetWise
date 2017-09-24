var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var IncidentSchema = new Schema({

    HarassmentType: {
        type: String,
        required: true
    },
    Longitude: {
        type: String,
        required: true
    },
    Latitude: {
        type: String,
        required: true
    },
    DateTime: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: false
    },

    id: {
        type: Schema.Types.ObjectId,
        ref: "IncidentID"
    }
});

var Incident = mongoose.model("Incident", IncidentSchema);

module.exports = Incident;
