var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var IncidentSchema = new Schema({

  latitude: {
    type: Number,
    required: true
  },

  longitude: {
    type: Number,
    required: true
  },

  DateTime: {
    type: Date,
    default: Date.now,
    required: true
  },

  HarassmentType: {
    type: String,
    required: true
  },

  id: {
    type: Schema.Types.ObjectId,
    ref: "IncidentID"
  }
});

var Incident = mongoose.model("Incident", IncidentSchema);

module.exports = Incident;
