const mongoose = require('mongoose');

// Create a schema for your data
const requestSchema = new mongoose.Schema({
  dep_date:Date,
  tripName:String,
  to_email_id: String,
  from_email_id:String,
  accepted_Status:Boolean
});

const Request = mongoose.model('RequestSchema', requestSchema);

module.exports = Request;