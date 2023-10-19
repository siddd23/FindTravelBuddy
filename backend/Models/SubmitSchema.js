const mongoose = require('mongoose');

// Create a schema for your data
const tripSchema = new mongoose.Schema({
  departureDate: Date,
  category: String,
  tripType: String,
  tripName: String,
  tripDescription: String,
  overview: String,
  aboutYou: String,
  accommodation: [String],
  inclusions: [String],
  exclusions: [String],
  specialItems: [String],
  tripItinerary: String,
  tripExpense: Number,
});

const Trip = mongoose.model('SubmitSchema', tripSchema);

module.exports = Trip;