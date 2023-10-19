const express = require('express');
const router = express.Router();
const Trip = require('../Models/SubmitSchema');

router.post('/posttrip', async (req, res) => {
  try {
    if (
      !req.body.departureDate ||
      !req.body.category ||
      !req.body.tripType ||
      !req.body.tripName ||
      !req.body.tripDescription ||
      !req.body.overview ||
      !req.body.aboutYou ||
      !req.body.accommodation ||
      !req.body.inclusions ||
      !req.body.exclusions ||
      !req.body.specialItems ||
      !req.body.tripItinerary ||
      !req.body.tripExpense
    ) {
      return res.status(400).send({
        message: 'Send all required fields',
      });
    }

    const tripData = {
      departureDate: req.body.departureDate,
      category: req.body.category,
      tripType: req.body.tripType,
      tripName: req.body.tripName, // Fixed the typo here
      tripDescription: req.body.tripDescription,
      overview: req.body.overview,
      aboutYou: req.body.aboutYou,
      accommodation: Array.isArray(req.body.accommodation) ? req.body.accommodation : [req.body.accommodation],
      inclusions: Array.isArray(req.body.inclusions) ? req.body.inclusions : [req.body.inclusions],
      exclusions: Array.isArray(req.body.exclusions) ? req.body.exclusions : [req.body.exclusions],
      specialItems: Array.isArray(req.body.specialItems) ? req.body.specialItems : [req.body.specialItems],
      tripItinerary: req.body.tripItinerary,
      tripExpense: req.body.tripExpense,
    };

    const trip = await Trip.create(tripData);
    return res.status(201).send(trip);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving the data.');
  }
});


router.get('/gettrips', async function(req,res){
  try {   
    const tripData = await Trip.find({});
    return res.status(200).json(tripData);
  } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message})
  }
})
router.get('/test', async function(req,res){
  try {
    return res.status(200).json("Connection Done");
  } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message})
  }
})

router.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = router;
