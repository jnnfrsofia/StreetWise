var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  name: {
    type: String,
    unique: true
  },

  incidents: [{
    type: Schema.Types.ObjectId,
    ref: "Incident"
  }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
